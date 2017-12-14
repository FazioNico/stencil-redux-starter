/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   07-12-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 12-12-2017
 */

 import { authActions, TAuthActions } from './auth.action';

 interface LoginState extends Object{}

 const getInitialState = () => {
   return {}
 };
 // create reducer
 const auth = (
   state: LoginState = getInitialState(),
   action: TAuthActions
 ) => {
   switch (action.type) {

     case authActions.CREATE_SUCCESS:{
       return Object.assign({},  action.payload.user )
     }

     case authActions.LOGIN_SUCCESS: {
       return Object.assign({}, state, action.payload.user)
     }
     case authActions.LOGOUT_SUCCESS: {
       return Object.assign({}, getInitialState())
     }

     case authActions.CHECK_AUTH_SUCCESS:{
       return Object.assign({}, state, action.payload )
     }
   }
   return state;
 };
 // export reducer
 export default auth;
