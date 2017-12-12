/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   08-12-2017
* @Email:  contact@nicolasfazio.ch
* @Last modified by:   webmaster-fazio
* @Last modified time: 12-12-2017
*/

import {
  loginAction,
  loginSuccessAction,
  logoutAction,
  logoutSuccessAction,
  checkAutAction,
  checkAutSuccessAction,
  checkAutNoUserAction,
  tokenSaveAction,
  tokenSaveSuccessAction,
  tokenDelete,
  tokenDeleteSuccessAction,
  errorAction
} from "./auth.action";

export const dispatchLoginAction = (payload:{email:string,password:string}) => async (dispatch, _getState) => {
  dispatch(loginAction(payload))
  let token:string|null = localStorage.getItem('token')
  let headers = new Headers()
      headers.append('cache-control','no-cache')
      headers.append('content-type','application/json')
      headers.append('x-access-token',token)
  let options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  };
  return fetch(`http://localhost:8080/rest/auth`,options)
  .then(response => response.json())
  .then(json => {
    if(!json.success) return json;
    // work with token
    dispatch(tokenSaveAction(json.token))
    localStorage.setItem('token', json.token)
    dispatch(tokenSaveSuccessAction());
    return json
  })
  .then(json => {
    // displatch correct action
    (json.success)
    ? dispatch(loginSuccessAction(json))
    : dispatch(errorAction(json));
    return json
  })
  .catch(err => dispatch(errorAction(err)))
}

export const dispatchLogoutAction = () => async (dispatch, _getState) => {
  dispatch(logoutAction())
  dispatch(tokenDelete())
  localStorage.removeItem('token')
  dispatch(tokenDeleteSuccessAction())
  dispatch(logoutSuccessAction())
  return window.location.href = './'
}

export const dispatchCheckAuthAction = () => async (dispatch, _getState) => {
  dispatch(checkAutAction())
  let token:string|null = localStorage.getItem('token')
  let headers = new Headers()
      headers.append('cache-control','no-cache')
      headers.append('content-type','application/json')
      headers.append('x-access-token',token)
  let options = {
    method: 'GET',
    headers: headers,
  };
  return fetch(`http://localhost:8080/rest/isauth`,options)
  .then(response => response.json())
  .then(json => {
    (json._id)
      ? dispatch(checkAutSuccessAction(json))
      : dispatch(checkAutNoUserAction(json))
  })
  .catch(err => dispatch(errorAction(err)))
}

export const isAuthenticated =  async() => {
    let isAuthenticated:boolean = false ;
    let token:string|null = localStorage.getItem('token')
    let headers = new Headers()
        headers.append('cache-control','no-cache')
        headers.append('content-type','application/json')
        headers.append('x-access-token',token)
    let options = {
      method: 'GET',
      headers: headers,
    };
    return fetch(`http://localhost:8080/rest/isauth`,options)
    .then(response => response.json())
    .then(json => {
      (json._id)
        ? isAuthenticated = true
        : isAuthenticated = false;
      return isAuthenticated
    });

}
export const AuthStoreService = {
  dispatchLoginAction, dispatchLogoutAction,
  dispatchCheckAuthAction
}
