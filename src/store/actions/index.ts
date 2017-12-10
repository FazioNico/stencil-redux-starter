/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   06-12-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 11-12-2017
 */

import { TAppConfigActions } from './app-config.action';
import { TAuthActions } from '../../components/app-login/store/auth.action';

// Keep this type updated with each known action
export type ActionTypes =
  | TAppConfigActions
  | TAuthActions
;
