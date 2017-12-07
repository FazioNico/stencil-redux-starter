/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   06-12-2017
* @Email:  contact@nicolasfazio.ch
* @Last modified by:   webmaster-fazio
* @Last modified time: 07-12-2017
*/

import { combineReducers } from 'redux';
import app from './app';
import auth from '../../components/app-login/store/auth.reducer';

const rootReducer = (combineReducers as any)({
  app,auth
});

export default rootReducer;
