import { useState, useEffect } from "react";
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";


export default function Login() {

    
  const [magic, setMagic] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [showValidatingToken, setShowValidatingToken] = useState(false);

  useEffect(() => {
    !magic &&
      setMagic(
        new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY, {
          extensions: [new OAuthExtension()],
        })
      );
    /* if `provider` is in our query params, the user is logging in with a social provider */
    
    
    finishEmailRedirectLogin();
    
  }, [magic]);

  const finishEmailRedirectLogin = async () => {

        let didToken = await magic.auth.loginWithCredential();
        setShowValidatingToken(true);
        await authenticateWithServer(didToken);
        console.log(didToken)
      
    }
  };


  const authenticateWithServer = async (didToken) => {
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + didToken,
      },
      credentials: 'include',
    });
    res.status === 200 && props.history.push('/');
  };