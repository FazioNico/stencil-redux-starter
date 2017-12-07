import { AppSetNameAction } from './app';
import * as auth from '../../components/app-login/store/auth.action';

export interface NullAction {
  type: TypeKeys.NULL
}

// Keep this type updated with each known action
export type ActionTypes =
  | NullAction
  | AppSetNameAction
  | auth.ILoginAction
;

export enum TypeKeys {
  // Won't match anything
  NULL = 'NULL',
  ERROR = 'ERROR',
  APP_SET_NAME = 'APP_SET_NAME'
};
