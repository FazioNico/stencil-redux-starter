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

  appSetName: Action;

  componentWillLoad() {
    // bind property to Store state
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { name }
      } = state;

      return {
        name
      }
    });
    // Bind Action to Event
    this.store.mapDispatchToProps(this, {
      appSetName
    });
  }

  doNameChange(newName: string) {
    // store dispatch action
    this.appSetName(newName);
  }

  navTo(event:UIEvent){
    console.log(this.name)
    //profile/stencil
    this.history.push(`/profile/${this.name}`,{});
  }

  render() {
    return (
      <div>
        <p>
          Welcome to {this.name} Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>
        <p>
          <input type="text" onInput={(e: any) => this.doNameChange(e.target.value)} value={this.name}/>
        </p>

          <button onClick={ (event: UIEvent) => this.navTo(event)}>
            Profile page
          </button>

      </div>
    );
  }
}
