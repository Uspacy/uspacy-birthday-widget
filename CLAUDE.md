# CLAUDE.md

`uspacy-birthday-widget` — the "Birthdays" card on the Uspacy portal (React 18 + MUI): up to 3 active users with the
nearest birthdays, a "Congratulate" link to their chat. A webpack Module Federation remote (`UspacyBirthdayWidget`,
exposes `./app`), served from GitHub Pages. `README.md` is the marketplace boilerplate — ignore it; `./settings`
(`components/Settings`) returns `null` and nothing loads it.

## Setup

```sh
export NPM_AUTH_TOKEN=<github token>   # REQUIRED: .npmrc interpolates it; a real token is needed for @uspacy/* packages
yarn install --frozen-lockfile         # Yarn 1 (yarn.lock); `prepare` installs the husky pre-commit hook
yarn dev                               # webpack dev server on http://localhost:8080 (opens the browser), remoteEntry.js
```

- Node 22.23.4 — pinned literally in `.github/workflows/pages.yml`. No `.nvmrc`.
- No `.env` is needed: the code reads no env vars (`dotenv-webpack` stays in the config but has nothing to load).
- `src/bootstrap.tsx` + `public/index.html` exist only for the dev server: `App` gets no `userSettings` and no portal
  session there, so the widget is empty. To see it with real data, run it inside the container:
  1. `yarn dev` here (port 8080).
  2. In `../container-frontend/src/components/BirthdayWidget/index.tsx` temporarily set
     `url: 'http://localhost:8080'`, then `yarn start` there (port 3000; it logs in with `REACT_APP_AUTH_EMAIL` /
     `REACT_APP_AUTH_PASSWORD` from its `.env`, which picks the portal).
  3. Open `http://localhost:3000/newsfeed` — the widget is in the right column. Reload the page after each change.
  4. Revert the container file — never commit the localhost URL.
- Expected noise in that setup: `Unsatisfied version ... of shared singleton module` warnings (the host has other
  versions of react, emotion, `@uspacy/store`) and `ERR_CONNECTION_REFUSED` for remotes on ports 3002/3004 that are
  not running.

## Verification

Run before every commit; all must exit 0:

```sh
yarn eslint          # eslint over src/, --max-warnings=0 (~2s); prettier runs inside eslint
npx tsc --noEmit     # type-check
yarn build           # production build -> dist/ (remoteEntry.js + static/js); ts-loader fails it on type errors
```

- `yarn eslint:fix` autofixes formatting and import order.
- Pre-commit (husky + lint-staged) runs `npm run eslint` on staged `*.{ts,tsx,js}`. Never bypass it.
- No tests and no test runner. Do not add test tooling unless asked.
- **There is no CI on PRs** — the only workflow is `pages.yml` (deploy on push to `main`), so the three commands above
  are the only gate. ESLint runs inside `yarn dev`, but not inside `yarn build`.

## Conventions

- **Merge to `main` = live in production for every portal at once.** `pages.yml` runs `npm install && npm run build`
  and pushes `dist/` to the `gh-pages` branch; `../container-frontend` (`src/components/BirthdayWidget/index.tsx`)
  loads `https://uspacy.github.io/uspacy-birthday-widget` at runtime — no version, no package, no stage, no rollback
  except reverting on `main`. If the remote fails to load, the container silently renders nothing.
- CI installs with **npm**, not yarn (`package-lock.json` is gitignored), so production may resolve different
  versions than `yarn.lock`. This is intentional — do not switch it to yarn. Pin new dependencies to exact versions.
- `@uspacy/store` / `@uspacy/sdk` are much older than the container's; leave them as is unless asked.
- PR review: an approval from anyone in `@Uspacy/uspacy-frontend-owners` is enough.
- **Contracts with `container-frontend` — do not change without the developer's explicit approval:**
  - `appName = 'UspacyBirthdayWidget'`, `filename: 'remoteEntry.js'`, exposed key `./app`, output dir `dist`,
    the Pages URL. Renaming any of them breaks the widget on every portal.
  - `App` props: only `userSettings` (the portal's `IPortalSettings`; `lang` and `nameFormat` are used).
  - The `shared` block in `webpack.config.js`: `react`, `react-dom`, MUI, emotion, `@uspacy/store`, `@uspacy/sdk`
    are singletons taken from the host. Users come from the **host's** `@uspacy/store` (`state.users`) — this repo
    does not fetch them; a store version incompatible with the container breaks data silently.
  - Links go to host routes `/profile/:id` and `/chat/:authUserId` (react-router `Link`, host router).
  - `.github/workflows/pages.yml`, `.npmrc`.
- Where logic lives: selection/sorting of birthdays in `helpers/users.ts` (`usersSortedBirthdays`: active users with
  `birthday`, today first, max 3 unless more than 3 today); name formatting in `getFormattedUserName`; UI in
  `components/BirthdayWidget` (+ `BirthdayCard`). `user.birthday` is unix **seconds** (`* 1000` everywhere).
- i18n is local JSON, edited directly in this repo (no Locize sync): `src/locales/<lng>/translation.json` × 6 (`uk`,
  `en-US`, `de`, `es-ES`, `pl`, `pt-BR`), fallback `uk`. Add every new key to all six. A new language also needs a case in
  `helpers/getDataLocale.ts` (date-fns locale), otherwise dates fall back to en-US.
- **Keep the own i18next instance** (`src/i18n.ts`: `createInstance()`, passed only via `I18nextProvider` in `App`).
  `i18next` and `react-i18next` are shared with the host and other remotes, so `import i18n from 'i18next'` is one
  global object per page: `activities-widget` (the "Upcoming activities" card next to this one) used to load its
  locale files into it, and our edits did not show up. Do not go back to the default export and do not add
  `initReactI18next` — it calls `setI18n` on the host's `react-i18next` and replaces its global instance.
- `nextActivities`, `noActivities*`, `priority.*` etc. in our locale files are `activities-widget`'s keys left from
  the shared instance; unused here. Remove them only when asked.
- `strictNullChecks` and `noImplicitAny` are off, so tsc will not catch null/undefined bugs.
- **Never commit or push without the developer's explicit confirmation** — ask every time, even after earlier approvals.
- **Never force-push** (`--force`, `--force-with-lease`, `+refspec`). If a push is rejected, stop and ask the developer.
- **Always commit the normal way.** Never skip or disable git hooks: no `--no-verify` / `-n` (incl. combined flags like
  `-nm`), `HUSKY=0`, `-c core.hooksPath=...` or similar. If a hook fails, fix the cause; if you cannot, stop and ask.
- **Git naming.** Branches: `feat/<ticket>_<short_name>` or `fix/<ticket>_<short_name>`, where `<ticket>`
  is the Uspacy task number. PR title: `[<ticket>]: <short summary of the PR>`; take the number from the
  branch name, and if it is not there, ask the developer. Commit message: a short description of what this
  specific commit does, with no ticket prefix.
- All PR titles and descriptions, commit messages, and replies to review comments are written in English, regardless of the language of the prompt or the conversation.
