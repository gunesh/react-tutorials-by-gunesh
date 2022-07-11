import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <div>
        <Form inline onSubmit={function noRefCheck() {}}>
          {/* <FormGroup>
            <Label for="backdrop">Backdrop value</Label>{' '}
            <Input
              id="backdrop"
              name="backdrop"
              onChange={function noRefCheck() {}}
              type="select"
            >
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
          </FormGroup>
          <FormGroup check className="mx-2">
            <Label check>
              <Input
                checked
                onChange={function noRefCheck() {}}
                type="checkbox"
              />{' '}
              Keyboard
            </Label>
          </FormGroup>{' '} */}
          <Button color="danger" onClick={true}>
            Click Me
          </Button>
        </Form>
        <Modal toggle={true}>
          <ModalHeader toggle={true}>
            Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={true}>
              Do Something
            </Button>{' '}
            <Button onClick={true}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default App;
