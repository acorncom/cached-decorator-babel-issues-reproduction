import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TestComponentComponent extends Component {
  @tracked firstName = 'David';
  @tracked lastName = 'Baker';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
