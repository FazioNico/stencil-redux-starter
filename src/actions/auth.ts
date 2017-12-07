/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   07-12-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 07-12-2017
 */

export enum authActions {
  CHECK_AUTH = '[Auth] Check Auth Requested',
  CHECK_AUTH_SUCCESS = '[Auth] Check Auth: user Success',
  CHECK_AUTH_NO_USER = '[Auth] Check Auth: no user Success',
  LOGIN = '[Auth] Login Requested',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGOUT = '[Auth] Logout Requested',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  CREATE = '[Auth] CREATE Requested',
  CREATE_SUCCESS = '[Auth] CREATE Success',
  TOKEN_SAVE = '[Auth] TOKEN_SAVE Requested',
  TOKEN_SAVE_SUCCESS = '[Auth] TOKEN_SAVE Success',
  TOKEN_DELETE = '[Auth] TOKEN_REMOVE Requested',
  TOKEN_DELETE_SUCCESS = '[Auth] TOKEN_REMOVE Success',
  ERROR = '[Auth] Error'
}

export interface ILoginAction {
  type: authActions.LOGIN,
  payload: any;
}
export const loginAction = (payload: any)  => {
  return {
    type: authActions.LOGIN,
    payload: payload
  }
};
export const loginSuccessAction = (payload: any) => {
  return {
    type: authActions.LOGIN_SUCCESS,
    payload: payload
  }
};
export const errorAction = (payload: any)=> {
  return {
    type: authActions.ERROR,
    payload: payload
  }
};

export const fetchLogin = (payload)=> {
  return dispatch => {
    dispatch(loginAction(payload))
    let myHeaders = new Headers();
    myHeaders.append('cache-control','no-cache')
    myHeaders.append('content-type','application/json')
    myHeaders.append('x-access-token','')
    let myInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(payload)
    };
    return fetch(`http://localhost:8080/rest/auth`,myInit)
      .then(response => response.json())
      .then(json => dispatch(loginSuccessAction(json)))
      .catch(err => dispatch(errorAction(err)))
  }
}
