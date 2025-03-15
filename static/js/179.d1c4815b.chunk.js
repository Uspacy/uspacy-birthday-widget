(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[179],{771:function(e,t){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.MainRoles=void 0,function(e){e.ADMIN="ADMIN",e.OWNER="OWNER"}(r||(t.MainRoles=r={}))},3817:function(e,t,r){(()=>{"use strict";var t={641:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useAppSelector=t.useAppDispatch=void 0;const n=r(6022);t.useAppDispatch=()=>(0,n.useDispatch)(),t.useAppSelector=n.useSelector},9790:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.removeUsersFromDepartment=t.addUsersToDepartment=t.deleteDepartment=t.editDepartment=t.createDepartment=t.fetchDepartments=void 0;const a=r(5184),i=r(4809),s=r(8065);t.fetchDepartments=(0,a.createAsyncThunk)("departments/fetchDepartments",((e,t)=>n(void 0,void 0,void 0,(function*(){try{const e=(yield i.uspacySdk.tokensService.getUserRoles().catch((()=>{})))||[],t=i.uspacySdk.usersService.hasRole(e,[s.MainRoles.ADMIN,s.MainRoles.OWNER])?"all":void 0;return(yield i.uspacySdk.departmentsService.getDepartments(void 0,"all",t)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.createDepartment=(0,a.createAsyncThunk)("departments/createDepartment",(({name:e,headId:t,description:r,usersIds:a,parentDepartmentId:s,generalDepartmentId:c},u)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.departmentsService.createDepartment({name:e,headId:t,description:r,usersIds:a,parentDepartmentId:s||c.toString()})).data}catch(e){return u.rejectWithValue("Failure")}})))),t.editDepartment=(0,a.createAsyncThunk)("departments/editDepartment",(({id:e,name:t,headId:r,description:a,usersIds:s,parentDepartmentId:c},u)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.departmentsService.updateDepartment(e,{name:t,headId:r,description:a,parentDepartmentId:c,usersIds:s})).data}catch(e){return u.rejectWithValue("Failure")}})))),t.deleteDepartment=(0,a.createAsyncThunk)("departments/deleteDepartment",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return i.uspacySdk.departmentsService.deleteDepartment(e)}catch(e){return t.rejectWithValue("Failure")}finally{return e}})))),t.addUsersToDepartment=(0,a.createAsyncThunk)("departments/addUsersToDepartment",(({departmentId:e,usersIds:t},r)=>n(void 0,void 0,void 0,(function*(){try{return i.uspacySdk.departmentsService.addUsersToDepartment(String(e),t)}catch(e){return r.rejectWithValue("Failure")}})))),t.removeUsersFromDepartment=(0,a.createAsyncThunk)("departments/removeUsersFromDepartment",(({departmentId:e,usersIds:t},r)=>n(void 0,void 0,void 0,(function*(){try{return i.uspacySdk.departmentsService.deleteUsersFromDepartment(String(e),t)}catch(e){return r.rejectWithValue("Failure")}}))))},995:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchProfile=void 0;const a=r(5184),i=r(4809);t.fetchProfile=(0,a.createAsyncThunk)("profile/fetchProfile",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.profileService.getProfile()).data}catch(e){return t.rejectWithValue("Failure")}}))))},8508:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}u((n=n.apply(e,t||[])).next())}))},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.uploadAvatar=t.deleteInvitation=t.repeatInvitation=t.sendUserInvites=t.activateUser=t.deactivateUser=t.updateUserRoles=t.updateUserPosition=t.updateUser=t.fetchUsers=void 0;const i=r(5184),s=r(4809),c=r(8065);t.fetchUsers=(0,i.createAsyncThunk)("users/fetchUsers",((e,t)=>n(void 0,void 0,void 0,(function*(){try{const e=(yield s.uspacySdk.tokensService.getUserRoles().catch((()=>{})))||[],t=s.uspacySdk.usersService.hasRole(e,[c.MainRoles.ADMIN,c.MainRoles.OWNER])?"all":void 0;return(yield s.uspacySdk.usersService.getUsers(void 0,"all",t)).data}catch(e){return t.rejectWithValue("Failure load users")}})))),t.updateUser=(0,i.createAsyncThunk)("users/updateUser",((e,t)=>n(void 0,void 0,void 0,(function*(){try{const{id:t}=e,r=a(e,["id"]),n=yield s.uspacySdk.usersService.updateUser(t,r);return e.active||e.registered||(n.data.dateOfInvitation=e.dateOfInvitation),n.data}catch(e){return t.rejectWithValue("Failure")}})))),t.updateUserPosition=(0,i.createAsyncThunk)("users/updateUserPosition",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield s.uspacySdk.usersService.updatePosition(e.id,e.position)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.updateUserRoles=(0,i.createAsyncThunk)("users/updateUserRoles",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield s.uspacySdk.usersService.updateRoles(e.id,e.roles)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.deactivateUser=(0,i.createAsyncThunk)("users/deactivateUser",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return s.uspacySdk.usersService.deactivateUser(e)}catch(e){return t.rejectWithValue("Failure")}})))),t.activateUser=(0,i.createAsyncThunk)("users/activateUser",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return s.uspacySdk.usersService.activateUser(e)}catch(e){return t.rejectWithValue("Failure")}})))),t.sendUserInvites=(0,i.createAsyncThunk)("users/sendUserInvites",(({invites:e,type:r},a)=>n(void 0,void 0,void 0,(function*(){try{return"single"===r?s.uspacySdk.invatesService.createInvates(e.reduce(((e,t)=>t.email.length>0?[...e,{email:t.email,firstName:t.firstName,lastName:t.lastName}]:e),[])):s.uspacySdk.invatesService.createInvatesBatch(e.reduce(((e,t)=>t.email.length>0?[...e,t.email]:e),[]))}catch(e){return a.rejectWithValue("Failure")}finally{return a.dispatch((0,t.fetchUsers)())}})))),t.repeatInvitation=(0,i.createAsyncThunk)("users/repeatInvitation",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return yield s.uspacySdk.invatesService.resendInvateByUserId(e),e}catch(e){return t.rejectWithValue("Failure")}})))),t.deleteInvitation=(0,i.createAsyncThunk)("users/deleteInvitation",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return s.uspacySdk.invatesService.deleteInvateByUserId(e)}catch(e){return t.rejectWithValue("Failure")}finally{return e}})))),t.uploadAvatar=(0,i.createAsyncThunk)("users/uploadAvatar",(({file:e,userId:t,adminRole:r,profileId:a},{rejectWithValue:i})=>n(void 0,void 0,void 0,(function*(){try{return(yield s.uspacySdk.usersService.uploadAvatar({file:e,userId:r&&t!==a?t:a})).data}catch(e){return i("Failure")}}))))},5184:e=>{e.exports=r(5377)},4809:e=>{e.exports=r(6927)},8065:e=>{e.exports=r(771)},6689:e=>{e.exports=r(1527)},6022:e=>{e.exports=r(1927)}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,a),i.exports}var i={};(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0});const t=a(6689),r=a(641),n=a(9790),s=a(995),c=a(8508);e.default=()=>{const e=(0,r.useAppDispatch)();return(0,t.useEffect)((()=>{e((0,s.fetchProfile)()),e((0,c.fetchUsers)()),e((0,n.fetchDepartments)())}),[]),null}})(),e.exports=i})()},5179:function(e,t,r){"use strict";var n=r(4848),a=r(2604),i=r(3817),s=r.n(i),c=r(5338),u=r(8078),o=r(1527),d=r.n(o),l=r(8504),p=r(7216),v=r(177),h=r(6402),f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},y=document.getElementById("root");(0,c.H)(y).render((0,n.jsx)(u.BrowserRouter,{children:(0,n.jsxs)(a.StoreProvider,{children:[(0,n.jsx)(s(),{}),(0,n.jsx)((function(e){var t=e.userSettings;return(0,o.useEffect)((function(){v.A.changeLanguage(null==t?void 0:t.lang)}),[null==t?void 0:t.lang]),(0,n.jsx)(d().Suspense,{children:(0,n.jsx)(l.I18nextProvider,f({i18n:v.A},{children:(0,n.jsx)(p.Ay,f({userSettings:t},{children:(0,n.jsx)(h.A,{})}))}))})}),{})]})}))},5338:function(e,t,r){"use strict";var n=r(5929);t.H=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=179.d1c4815b.chunk.js.map