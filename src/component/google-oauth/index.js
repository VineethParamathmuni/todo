import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { useState } from "react";

function GoogleAuth() {
    //eslint-disable-next-line
    const [authInfo, setAuthInfo] = useState(null);
    //eslint-disable-next-line
    const [errorInfo, setErrorInfo] = useState(null);

  const handleLogin = useGoogleLogin({
    onSuccess : (response) => setAuthInfo(response),
    onError : (response) => setErrorInfo(response),   
  })

  return (
    <div>
      <h1>Authentication Page</h1>
      <button onClick={handleLogin}>Login using Google</button>
    </div>
  );
}

export default GoogleAuth;
