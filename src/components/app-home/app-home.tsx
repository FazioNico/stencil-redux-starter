import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { RouterHistory } from '@stencil/router';

import { appSetName } from '../../store/actions/app';

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

  componentWillLoad() {
    // TODO: check if user is auth and kick him to loginPage if not.
    // bind property to Store state
    this.store.mapStateToProps(this, (state) => {
      const { app: { name }} = state;
      const {auth:curentUser} = state;
      return {name, curentUser}
    });
    // Map Dispatch Action
    this.store.mapDispatchToProps(this, {
      appSetName
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

  render() {
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

      </div>
    );
  }
}
