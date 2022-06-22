import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const App = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    var data = window.localStorage.getItem('SHOW_TOGGLE');
    setShow(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('SHOW_TOGGLE', JSON.stringify(show));
  }, [show]);

  return (
    <React.Fragment>
      <a
        onClick={() => {
          setShow(!show);
        }}
        href="#"
      >
        Toggle
      </a>
      {show && <div>Show/Hide Me</div>}
    </React.Fragment>
  );
};
root.render(
  <div>
    <App />
  </div>
);
