import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { RouterHistory } from '@stencil/router';

import { appSetName } from '../../store/actions/app-config.action';
import { AuthStoreService } from '../app-login/store//auth-store.service';
import { canEnterIfAuthenticated } from "../../decorators";

@canEnterIfAuthenticated
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  @Prop() history: RouterHistory;
  @Prop({ context: 'store' }) store: Store;
  @State() name: string;
  @State() curentUser: any;

  appSetName: Action;
  dispatchLogout: Action;

  initComponent(){
    // bind property to Store state
    this.store.mapStateToProps(this, (state) => {
      // use ES6 destructuring.
      // Doc: https://nicolasfazio.ch/blog/es6-destructuring
      const { appConfig: { name }} = state;
      const {auth:curentUser} = state;
      return {name, curentUser}
    });
    // Map Dispatch Action
    const {dispatchLogoutAction:dispatchLogout} = AuthStoreService;
    this.store.mapDispatchToProps(this, {
      appSetName, dispatchLogout
    });
  }

  doNameChange(newName: string) {
    // store dispatch action
    this.appSetName(newName);
  }

  navTo(){
    console.log(this.name)
    //profile/stencil
    this.history.push(`/profile/${this.name}`,{});
  }

  onLogout():void{
    this.dispatchLogout()
  }

  render() {
    if (!this.curentUser) return;
    return (
      <div>
        <p>
          Hello {this.curentUser.email} and welcome to {this.name} Starter.
        </p>
        <p>
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>
        <p>
          <input type="text" onInput={(e: any) => this.doNameChange(e.target.value)} value={this.name}/>
        </p>
          <button onClick={ _ => this.navTo()}>
            Profile page
          </button>
          <button onClick={ _ => this.onLogout()}>
            Logout
          </button>
      </div>
    );

  }
}
