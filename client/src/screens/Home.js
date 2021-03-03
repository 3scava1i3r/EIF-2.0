import React from 'react'
import { useUser } from '../lib/hooks'
import { Button } from '@material-ui/core'
import { Magic } from "magic-sdk";
/* import Web3 from "web3"; */
import { ethers } from "ethers";


const dai = require("../abi/DAI.json");
const WBTC = require("../abi/WBTC.json");
const WETH = require("../abi/WETH.json");

export default function Home() {
  const user = useUser();
  console.log(user);

  const magic = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY, {
    network: "ropsten",
  });

  console.log(magic)
  /* const web3 = new Web3(magic.rpcProvider);  */

  const provider = new ethers.providers.Web3Provider(magic.rpcProvider);


  const a = async() => {

    const signer = provider.getSigner();

    // Get user's Ethereum public address
    const address = await signer.getAddress();
    console.log(address);

    const balance = ethers.utils.formatEther(
      await provider.getBalance(address) // Balance is in wei
    );

    console.log(balance)

    /* const fromAddress = (await web3.eth.getAccounts())[0];

  const bal = await web3.eth.getBalance(fromAddress);
  
  const l = await web3.utils.fromWei(bal)
  console.log(l)
  console.log(fromAddress) */


  /* const WBTCContract = new ethers.Contract('0xc7ef5c611beC84354fC22c59F2ac0601D6aDA029', WBTC  , provider);
  const WBTCWithSigner = WBTCContract.connect(signer);
  const WBTCBal = await WBTCContract.balanceOf(address)
  const l = await ethers.utils.formatUnits(WBTCBal, 18);
  console.log(l);
  */


  const DAITkn = new ethers.Contract('0xaD6D458402F60fD3Bd25163575031ACDce07538D' , dai , provider)
  const DAIWithSigner = DAITkn.connect(signer);
  const DAIBal = await DAITkn.balanceOf(address);
  const b = await ethers.utils.formatUnits(DAIBal, 18);
  console.log(b); 


  const WethContract = new ethers.Contract(
    "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    WETH,
    provider
  );
  const WethWithSigner = WethContract.connect(signer);
  const WethBal = await WethContract.balanceOf(address);
  const l = await ethers.utils.formatUnits(WethBal, 18);
  console.log(l);


}
a();
  
  
   

  return (
    <div>
      <h1>home</h1>
      {user ? <h2> You are logged in !</h2> : <h2> Not logged in</h2>}

      <h2></h2>
    </div>
  );
}
