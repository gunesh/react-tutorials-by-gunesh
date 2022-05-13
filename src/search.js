import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function Search(props) {
  const debFun = (callback, delay) => {
    let timerId;
    console.log('AAA', timerId);
    clearTimeout = timerId;
    timerId = setTimeout(callback, delay);
  };
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="exampleEmail"></Label>
          <Input
            id="exampleEmail"
            type="text"
            placeholder="Enter to search here"
            onChange={(e) => {
              debFun(props.callback, props.delay, e.target.value);
            }}
          />
        </FormGroup>
      </Form>
    </>
  );
}

export default Search;
