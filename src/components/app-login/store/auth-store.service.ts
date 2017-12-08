/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   08-12-2017
* @Email:  contact@nicolasfazio.ch
* @Last modified by:   webmaster-fazio
* @Last modified time: 08-12-2017
*/

import {loginAction,loginSuccessAction,logoutAction, logoutSuccessAction, errorAction} from "./auth.action";

export const fetchLogin = (payload:{email:string,password:string}) => async (dispatch, _getState) => {
  dispatch(loginAction(payload))
  let headers = new Headers()
  headers.append('cache-control','no-cache')
  headers.append('content-type','application/json')
  headers.append('x-access-token','')
  let options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  };
  return fetch(`http://localhost:8080/rest/auth`,options)
  .then(response => response.json())
  .then(json => {
    (json.success)
    ? dispatch(loginSuccessAction(json))
    : dispatch(errorAction(json))
  })
  .catch(err => dispatch(errorAction(err)))
}

export const logout = () => async (dispatch, _getState) => {
  dispatch(logoutAction())
  // TODO: rmv storage token
  return dispatch(logoutSuccessAction())
}

export const AuthStoreService = {
  fetchLogin,
  logout
}
