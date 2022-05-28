# react-gunesh-jdgqss

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-gunesh-jdgqss)


Add Mobx Steps:
https://pauledenburg.com/add-mobx-to-your-react-project/
1.install mobx  => npm i mobx mobx-react
2.create store  =>  Create your store by creating file src/stores/applicationStore.js.
  // file src/stores/applicationStore.js
import {action, computed, decorate, observable } from 'mobx'
import autoStore from '../libs/autoStore'

class ApplicationStore {
    greet = 'hello world'

    constructor() {
        // store changes to the state in localStorage
        autoStore(this)
    }

    setGreet(newGreet) {
        this.greet = newGreet
    }
}

decorate(ApplicationStore, {
    greet: observable,

    setGreet: action
})

const store = new ApplicationStore()
export default store

3.