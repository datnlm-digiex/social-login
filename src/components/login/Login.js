import React, { useEffect } from "react";
import classes from "./Login.module.css";

import Box from "../../UI/Box";

import GoogleLogin from "react-google-login";

//redux
import { useDispatch } from "react-redux";
import { login } from "../../store/features/auth";
import { gapi } from "gapi-script";

const Login = () => {
  const clientId = "4187011526-1tlf1rukt366bf61h8m7vo3v89fsm2hv.apps.googleusercontent.com";
  const dispatch = useDispatch();
  // useEffect(()=> {
  //   gapi.load("client:auth2", ()=> {
  //     gapi.auth2.init({clientId:clientId})
  //   })
  // }, [])

  const thirdPartyLoginHandler = ({ response, provider, error }) => {
    // console.log(" response>>", response)
    // console.log(" provider>>", provider)
    // console.log(" error>>", error)
    dispatch(login({ user: response, provider, error }));
  };
  const successResponseGoogle = (response) => {
    console.log('success');
    console.log(response.tokenId);
    console.log(response.profileObj);
    thirdPartyLoginHandler({
      error: false,
      provider: "google",
      response: response.profileObj
  });
  };
  const failResponseGoogle = (error) =>
  console.log('fail');
    thirdPartyLoginHandler({ error: true, provider: "google", response:  {}});

  return (
    <Box className={classes.login}>
    
      <GoogleLogin
        clientId={clientId}
        // clientId="617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com"
        // className={classes.login__btn}
        onSuccess={successResponseGoogle}
        onFailure={(error)=> console.log(error)}
        cookiePolicy={'single_host_origin'}
        redirectUri='http://localhost:4200'
        render={(renderProps) => (
          <button className={classes.login__btn} onClick={renderProps.onClick}>
            Login with Google
          </button>
        )}
      />
    </Box>
  );
};

export default Login;
