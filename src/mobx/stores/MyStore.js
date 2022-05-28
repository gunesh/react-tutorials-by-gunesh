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
  myFirstVar = 'Test';
  listItem = [];
  totalItem = 0;
  page = 1;
  per_page = 1;
  itemDetails = [];
  testFormInit = {
    name: undefined,
    type: undefined,
    number: undefined,
    account: undefined,
  };
  selectForm = {
    my_select: '',
    title: '',
  };

  myOptions = [
    { a: 'Option', b: 1 },
    { a: 'Option', b: 2 },
    { a: 'Option', b: 3 },
  ];
  myCustomOption() {
    let list = this.myOptions;
    let new_list = list.map((item) => {
      let obj = {};
      obj['lbl'] = item.a + ' ' + item.b * 10;
      obj['val'] = item.b;
      return obj;
    });
    return new_list;
  }
  constructor() {
    makeObservable(this, {
      myOptions: observable,
      itemDetails: observable,
      totalItem: observable,
      page: observable,
      per_page: observable,
    });
  }
  submitMyForm(form) {
    console.log(form);
  }

  addEle() {
    this.myOptions.push({ a: 'Option', b: 1 });
  }

  async fetchData() {
    this.loader = true;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    // console.log(response.data);
    this.itemDetails = response.data;
    // .then((res) => {
    //   return (this.itemDetails = res.data);
    //   this.loader = false;
    //   console.log(res.data);
    // });
    this.loader = false;
    return response;
  }

  apiData() {
    return this.fetchData()
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  }

  getData() {
    return this.itemDetails;
  }
}
