import { TypeKeys } from './index';

export interface AppSetNameAction {
  type: TypeKeys.APP_SET_NAME,
  name: string;
}

export const appSetName = (name: string) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_NAME,
    name: name
  })
};
