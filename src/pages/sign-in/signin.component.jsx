import React, { Fragment } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

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

      <SignUpForm />
    </Fragment>
  );
}

export default SignIn;
