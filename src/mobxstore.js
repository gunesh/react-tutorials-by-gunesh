import { action, computed, decorate, observable } from 'mobx';
import autoStore from './autoStore';

class ApplicationStore {
  greet = 'hello world';

  constructor() {
    // store changes to the state in localStorage
    autoStore(this);
  }

  setGreet(newGreet) {
    this.greet = newGreet;
  }
}

decorate(ApplicationStore, {
  greet: observable,

  setGreet: action,
});

const store = new ApplicationStore();
export default store;
