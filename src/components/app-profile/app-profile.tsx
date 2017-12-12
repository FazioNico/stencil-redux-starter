import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Store } from '@stencil/redux';

import { canEnterIfAuthenticated } from "../../decorators";

@canEnterIfAuthenticated
@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.scss'
})
export class AppProfile {

  @Prop({ context: 'store' }) store: Store;
  @Prop() match: MatchResults;

  initComponent() {
    console.log('->',this.match)
    console.log(this.match.params.name)
  }

  render() {
    //console.log('->',this.match)
    if (this.match && this.match.params.name) {
      return (
        <div>
          <p>
            Hello! My name is {this.match.params.name}.
            My name was passed in through a route param!
          </p>
        </div>
      );
    }
  }
}
