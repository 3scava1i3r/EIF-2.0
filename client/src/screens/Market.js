import React from 'react'
import { useUser } from "../lib/hooks";
import { Magic } from "magic-sdk";
import Web3 from "web3";


import './main.css'
import Card from '../components/Card'

export default function Market() {

    const user = useUser();
    console.log(user);

    const magic = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY, {
    network: "ropsten",
  });
  
  
  const web3 = new Web3(magic.rpcProvider); 

  console.log(magic)
  const a = async() => {
  const fromAddress = (await web3.eth.getAccounts())[0];
  
  }
  


    return (
      <div>
        <h1>Market</h1>

        {/* <div id="hh">
          {K.map((K, index) => (
            <>
              <Card K={K} />
            </>
          ))}
        </div> */}
      </div>
    );
}
