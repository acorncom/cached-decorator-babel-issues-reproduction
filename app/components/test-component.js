import Component from '@glimmer/component';
import { tracked, cached } from '@glimmer/tracking';

export default class TestComponentComponent extends Component {
  @tracked firstName = 'David';
  @tracked lastName = 'Baker';

  @cached
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
