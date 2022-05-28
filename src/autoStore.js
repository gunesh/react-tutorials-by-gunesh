import { toJS, autorun, set } from 'mobx';

export default function (_this) {
  let firstRun = true;

  // will run on change
  autorun(() => {
    // on load check if there's an existing store on
    // localStorage and extend the store
    if (firstRun) {
      const existingStore = window.localStorage.getItem('store');

      if (existingStore) {
        set(_this, JSON.parse(existingStore));
      }
    }

    // from then on serialize and save to localStorage
    const serializedThis = toJS(_this);
    window.localStorage.setItem('store', JSON.stringify(serializedThis));
  });

  firstRun = false;
}
