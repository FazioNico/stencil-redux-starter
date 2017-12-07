import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.scss'
})
export class AppProfile {

  @Prop() match: MatchResults;

  componentWillLoad() {
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
