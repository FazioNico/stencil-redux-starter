/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   06-12-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 11-12-2017
 */

export enum appConfigActions {
  // Won't match anything
  NULL = 'NULL',
  ERROR = 'ERROR',
  APP_SET_NAME = 'APP_SET_NAME'
};

export interface IAppSetNameAction {
  type: appConfigActions.APP_SET_NAME,
  name: string;
}
export const appSetNameAction = (payload):IAppSetNameAction  => {
  return {
    type: appConfigActions.APP_SET_NAME,
    name: payload
  }
};

export const appSetName = (name: string) => async (dispatch, _getState) => {
  return dispatch(appSetNameAction(name))
};

export type TAppConfigActions = IAppSetNameAction
