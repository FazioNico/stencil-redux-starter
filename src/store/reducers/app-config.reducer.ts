/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   06-12-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 11-12-2017
 */

import { ActionTypes } from '../actions/index';
import { appConfigActions } from "../actions/app-config.action";

interface AppConfigState {
  name: string;
}

const getInitialState = () => {
  return {
    name: 'Stencil Redux'
  }
};

const appConfig = (state: AppConfigState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case appConfigActions.APP_SET_NAME: {
      return Object.assign({}, state, { name: action.name})
    }
  }
  return state;
};

export default appConfig;
