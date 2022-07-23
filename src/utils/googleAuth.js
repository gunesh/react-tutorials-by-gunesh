import React from "react";
import qs from "qs";
import jwtDecode from "jwt-decode";

const CLIENT_ID =
  "1056979466539-eersuk4n7v3mpg6bv5tbijrcn0fm704s.apps.googleusercontent.com";
const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

const queryStr = qs.stringify({
  client_id: CLIENT_ID,
  redirect_uri: window.location.href,
  response_type: "token id_token",
  scope: "openid profile email",
  nonce: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
});

const loginUrl = AUTHORIZE_URI + "?" + queryStr;

export default () => {
  const { id_token } = qs.parse(window.location.hash.substr(1));

  if (!id_token) {
    window.location.assign(loginUrl);
    return null;
  }

  const { email, name, picture } = jwtDecode(id_token);

  return (
    <>
      <h2>Google Profile</h2>
      <dt>email</dt>
      <dd>{email}</dd>
      <dt>name</dt>
      <dd>{name}</dd>
      <dt>picture</dt>
      <dd><img src={picture} /></dd>
    </>
  );
};
