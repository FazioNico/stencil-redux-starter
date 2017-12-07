/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import '@stencil/redux';

import {
  RouterHistory,
} from '@stencil/router';

import {
  AppLogin as AppLogin
} from './components/app-login/app-login';

declare global {
  interface HTMLAppLoginElement extends AppLogin, HTMLElement {
  }
  var HTMLAppLoginElement: {
    prototype: HTMLAppLoginElement;
    new (): HTMLAppLoginElement;
  };
  interface HTMLElementTagNameMap {
    "app-login": HTMLAppLoginElement;
  }
  interface ElementTagNameMap {
    "app-login": HTMLAppLoginElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-login": JSXElements.AppLoginAttributes;
    }
  }
  namespace JSXElements {
    export interface AppLoginAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}
