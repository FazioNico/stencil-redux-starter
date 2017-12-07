import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';

import { appSetName } from '../../actions/app';
import { configureStore } from '../../store/index';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  @Prop({ context: 'store' }) store: Store;

  componentWillLoad() {
    // Only do this once, in the root component
    this.store.setStore(configureStore({}));
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

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>

          </stencil-router>
        </main>
      </div>
    );
  }
}
