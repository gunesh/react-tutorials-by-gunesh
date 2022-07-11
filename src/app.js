import React from 'react';
import {
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

function App() {
  const [toggle, setToggle] = React.useState(false);
  const toggleHnadler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      
      <div>
        <Button
          color="danger"
          onClick={() => {
            toggleHnadler();
          }}
        >
          Click Me
        </Button>

        {console.log(toggle)}
        <Modal toggle={toggle} isOpen={toggle} backdrop="static">
          <ModalHeader
            toggle={() => {
              toggleHnadler();
            }}
          >
            Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          </ModalBody>
          <ModalFooter>
            {/* <Button
              color="primary"
              onClick={() => {
                toggleHnadler();
              }}
            >
              Do Something
            </Button>{' '} */}
            <Button
              onClick={() => {
                toggleHnadler();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default App;
