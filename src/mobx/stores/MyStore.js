import {} from 'mobx-react-lite';
import { observable } from 'mobx';
import axios from 'axios';
export class MyStore {
  loader = false;
  myFirstVar = 'Test';
  listItem = [];
  itemDetails = {};
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
  constructor() {}
  submitMyForm(form) {
    console.log(form);
  }

  addEle(){
    this.myOptions.push({ a: 'Option', b: 1 })
  }

  fetchData(id) {
    this.loader = true;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        this.itemDetails = res.data;
        this.loader = false;
        console.log(res.data);
      });
  }

  getData() {
    return this.itemDetails;
  }
}