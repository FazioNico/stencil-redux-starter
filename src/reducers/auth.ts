/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   07-12-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 07-12-2017
 */

 import { authActions, ILoginAction } from '../actions/auth';

 interface LoginState extends Object{}

 const getInitialState = () => {
   return {}
 };

 const auth = (state: LoginState = getInitialState(), action: any) => {
   switch (action.type) {
     case authActions.LOGIN_SUCCESS: {
       return Object.assign({}, state, action.payload.user)
     }
   }
   return state;
 };

 export default auth;
