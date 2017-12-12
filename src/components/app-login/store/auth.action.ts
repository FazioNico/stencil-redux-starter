/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   07-12-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 12-12-2017
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

export interface ICheckAuthAction {
  type: authActions.CHECK_AUTH
}
export const checkAutAction = ():ICheckAuthAction  => {
  return {
    type: authActions.CHECK_AUTH
  }
};

export interface ICheckAuthSuccessAction {
  type:authActions.CHECK_AUTH_SUCCESS,
  payload: any
}
export const checkAutSuccessAction = (payload:any):ICheckAuthSuccessAction  => {
  return {
    type: authActions.CHECK_AUTH_SUCCESS,
    payload:payload
  }
}

export interface ICheckAutNoUserAction {
  type:authActions.CHECK_AUTH_NO_USER,
  payload:any
}
export const checkAutNoUserAction = (payload:any):ICheckAutNoUserAction  => {
  return {
    type: authActions.CHECK_AUTH_NO_USER,
    payload:payload
  }
}

export interface ITokenSaveAction {
  type: authActions.TOKEN_SAVE,
  payload:any
}
export const tokenSaveAction = (payload: any):ITokenSaveAction  => {
  return {
    type: authActions.TOKEN_SAVE,
    payload: payload
  }
}

export interface ITokenSaveSuccessAction {
  type: authActions.TOKEN_SAVE_SUCCESS
}
export const tokenSaveSuccessAction = ():ITokenSaveSuccessAction  => {
  return {
    type: authActions.TOKEN_SAVE_SUCCESS
  }
}

export interface ITokenDeleteAction {
  type: authActions.TOKEN_DELETE
}
export const tokenDelete =  ():ITokenDeleteAction  => {
  return {
    type: authActions.TOKEN_DELETE
  }
}

export interface ITokenDeleteSuccessAction {
  type: authActions.TOKEN_DELETE_SUCCESS
}
export const tokenDeleteSuccessAction = ():ITokenDeleteSuccessAction  => {
  return {
    type: authActions.TOKEN_DELETE_SUCCESS
  }
}

export interface ILoginAction {
  type: authActions.LOGIN,
  payload: any;
}
export const loginAction = (payload: any):ILoginAction  => {
  return {
    type: authActions.LOGIN,
    payload: payload
  }
};

export interface IloginSuccessAction {
  type: authActions.LOGIN_SUCCESS,
  payload: any;
}
export const loginSuccessAction = (payload: any):IloginSuccessAction => {
  return {
    type: authActions.LOGIN_SUCCESS,
    payload: payload
  }
};

export interface IlogoutAction {
  type: authActions.LOGOUT
}
export const logoutAction = ():IlogoutAction  => {
  return {
    type: authActions.LOGOUT
  }
};

export interface IlogoutSuccessAction {
  type: authActions.LOGOUT_SUCCESS
}
export const logoutSuccessAction = ():IlogoutSuccessAction => {
  return {
    type: authActions.LOGOUT_SUCCESS
  }
};

export interface IerrorAction {
  type: authActions.ERROR,
  payload: any;
}
export const errorAction = (payload: any):IerrorAction => {
  return {
    type: authActions.ERROR,
    payload: payload
  }
};

export type TAuthActions =
ILoginAction | IloginSuccessAction |
IlogoutAction | IlogoutSuccessAction |
ITokenDeleteAction | ITokenDeleteSuccessAction |
ICheckAuthAction | ICheckAuthSuccessAction | ICheckAutNoUserAction |
IerrorAction
