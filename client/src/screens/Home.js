import React from 'react'
import { useUser } from '../lib/hooks'
import { Button } from '@material-ui/core'

export default function Home() {

    const user = useUser();
    console.log(user);
    return (
      <div>
        <h1>home</h1>
        {user ? <h2> You are logged in !</h2> : <h2> Not logged in</h2>}
        
      </div>
    );
}
