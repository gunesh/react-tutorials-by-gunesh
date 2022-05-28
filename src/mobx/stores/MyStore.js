import {} from 'mobx-react-lite';

import {
  action,
  computed,
  makeObservable,
  observable,
  autorun,
  runInAction,
} from 'mobx';

import axios from 'axios';
export class MyStore {
  loader = false;
  itemDetails = [];
  option = {
    count: 0,
    page: 1,
    per_page: 1,
    total_pages:0,
  };
  myOptions = [{ a: 'Option', b: 1 }];

  constructor() {
    makeObservable(this, {
      myOptions: observable,
      itemDetails: observable,
      option: observable,
      loader: observable,
    });
  }

  addEle() {
    this.myOptions.push({ a: 'Option', b: Math.random() });
  }

  setApiOption(page, per_page) {
    this.option = { ...this.option, page, per_page };
  }

  async fetchData() {
    const url = `https://reqres.in/api/users?page=${this.option.page}&per_page=${this.option.per_page}`;
    console.log('URL===>', url);
    return await axios.get(url);
  }

  apiData(callback) {
    this.loader = true;

    setTimeout(() => {
      this.fetchData()
        .then((response) => {
          this.option.page = response.data.page;
          this.option.count = response.data.total;
          this.option.per_page = response.data.per_page;
          this.option.total_pages = response.data.total_pages;
          this.itemDetails = response.data.data;
        //  callback(this.itemDetails);
          this.loader = false;
          console.log('D', this, response);
        })
        .catch((err) => console.log('Errors:', err));
    }, 2000);
  }
}
