/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   06-12-2017
* @Email:  contact@nicolasfazio.ch
* @Last modified by:   webmaster-fazio
* @Last modified time: 07-12-2017
*/

import { combineReducers } from 'redux';
import appConfig from './app-config.reducer';
import auth from '../../components/app-login/store/auth.reducer';

const rootReducer = (combineReducers as any)({
  appConfig,
  auth
});

export default rootReducer;
