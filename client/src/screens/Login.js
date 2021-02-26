import React , { useEffect , useState } from 'react'
import { Button , TextField } from '@material-ui/core'
import './main.css'
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import Web3 from "web3";
import { useHistory } from "react-router-dom";
import { useUser } from "../lib/hooks";


import './main.css'
/* const magic = new Magic("pk_test_7F9770924CF1D820"); */

/* const customNodeOptions = {
  rpcUrl: "http://127.0.0.1:8545", // Your own node URL
  chainId: 1337, // Your own node's chainId
};
 */
// Setting network to localhost blockchain


/* const web3 = new Web3(magic.rpcProvider);
console.log(web3) */
/* const email = 'tripathi.hritwik@gmail.com' */


/* 
const a = async(email) => {
  let g = await magic.auth.loginWithMagicLink({
    email: "tripathi.hritwik@gmail.com",
    showUI: true,
  }); 
  console.log(g)

  const address = (await web3.eth.getAccounts())[0];


  const balance = web3.utils.fromWei(
    await web3.eth.getBalance(address) // Balance is in wei
  );
  
  console.log(balance)
  console.log(address)

  const l = await magic.user.getMetadata();
  console.log(l);


} */





export default function Login() {
    
  const [mail , setmail ] = useState('');

  const inputEvent = (e) => {
    /* console.log(e.target.value); */
    setmail(e.target.value);
    console.log(mail)
  };


    useUser({ redirectTo: "/", redirectIfFound: true });
    const history = useHistory();
    const [magic, setMagic] = useState(null);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
      !magic &&
        setMagic(
          new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY, {
            extensions: [new OAuthExtension()],
          })
        );
      magic?.preload();
    }, [magic]);

    async function handleLoginWithEmail(email) {
      console.log(mail)
      try {
        setDisabled(true); // disable login button to prevent multiple emails from being triggered
        let didToken = await magic.auth.loginWithMagicLink({
          email: mail,
          redirectURI: `${process.env.REACT_APP_CLIENT_URL}/callback`,
        });
        authenticateWithServer(didToken);
        console.log(didToken);
      } catch (error) {
        setDisabled(false); // re-enable login button - user may have requested to edit their email
        console.log(error);
      }
    }

    async function authenticateWithServer(didToken) {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken,
        },
        credentials: "include",
      });
      res.status === 200 && history.push("/");
    }


    return (
      <div className="login">
        <div id="email">
          <TextField
            id="login"
            label="Email Id"
            onChange={inputEvent}
            value={mail}
          />
        </div>

        <div>
          <Button
            id="lgb"
            variant="contained"
            color="primary"
            onClick={handleLoginWithEmail}
          >
            Create a new account
          </Button>
          <Button id="lgb" variant="contained" color="primary">
            Import an Account
          </Button>
        </div>
      </div>
    );
}
