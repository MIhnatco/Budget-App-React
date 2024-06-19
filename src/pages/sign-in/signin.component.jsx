import React, { Fragment } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <Fragment>
      <h1>Sign In</h1>

      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </Fragment>
  );
}

export default SignIn;
