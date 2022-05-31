import React from 'react';
import ReactDOM from 'react-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './style.css';

const TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
const DELAY = 1500;

class Captcha extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: 'not fired',
      value: '[empty]',
      load: false,
      expired: 'false',
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log('didMount - reCaptcha Ref-', this._reCaptchaRef);
  }

  handleChange = (value) => {
    console.log('Captcha value:', value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: 'true' });
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: 'called!' });
    console.log('scriptLoad - reCaptcha Ref-', this._reCaptchaRef);
  };

  render() {
    const { value, callback, load, expired } = this.state || {};
    return (
      <div className="App">
        {/* <h2>
          NOTE: initial load delayed <em>{DELAY / 1000}sec</em> to demonstrate
          callback
        </h2>
        <h3>Recaptcha loaded callback: {callback}</h3>
        <h5>Recaptcha value: {value}</h5>
        <h5>Expired: {expired}</h5> */}
        {load && (
          <ReCAPTCHA
            style={{ display: 'inline-block' }}
            theme="dark"
            // ref={this._reCaptchaRef}
            sitekey={TEST_SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
      </div>
    );
  }
}

const MyCaptcha = () => {
  return (
    <>
      <ReCAPTCHA
        style={{ display: 'inline-block' }}
        theme="dark"
        ref={null}
        sitekey={TEST_SITE_KEY}
        onChange={() => {
          console.log('change');
        }}
        asyncScriptOnLoad={() => {
          console.log('load');
        }}
      />
    </>
  );
};
export { Captcha, MyCaptcha };
