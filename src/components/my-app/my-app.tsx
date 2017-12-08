import { Component, Prop } from '@stencil/core';
import { ActiveRouter } from '@stencil/router';
import { Store } from '@stencil/redux';

import { configureStore } from '../../store/index';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter;
  @Prop({ context: 'store' }) store: Store;

  componentDidLoad() {
    // Only do this once, in the root component
    this.store.setStore(configureStore({}));
    // here we are monitoring user auth state with Redux
    this.store.mapStateToProps(this, (state) => {
      if(!this) return;
      // use ES6 destructuring.
      // Doc: https://nicolasfazio.ch/blog/es6-destructuring
      const curentUser = state.auth;
      //console.log('state...',this.activeRouter.get());
      (curentUser._id)
        ? this.activeRouter.get().history.replace('/home',{})
        : this.activeRouter.get().history.replace('/',{});
      return {
        curentUser
      }
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil Redux App Starter</h1>
        </header>
        <main>
          <stencil-router>

            <stencil-route url='/' component='app-login' exact={true}>
            </stencil-route>

            <stencil-route url='/home' component='app-home'>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>

          </stencil-router>
        </main>
      </div>
    );
  }
}
