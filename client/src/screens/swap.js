import React from 'react'
import {
  Box,
  Button,
  Menu,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";


import './main.css'


export default function Swap() {


    const [CryptoSend, setCryptoSend] = React.useState("");

    const Sender = (e) => {
      setCryptoSend(e.target.value);
    };


    const [CryptoGet, setCryptoGet] = React.useState("");

    const Get = (e) => {
      setCryptoGet(e.target.value);
    };



    return (
      <div id='main'>
        <div id="box">
          <div id="up">
            <div>
              <h2>From</h2>
            </div>
            <div id="up-line">
              <TextField
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                
              />

              <FormControl id="Label-CryptoGet">
                <InputLabel id="CryptoGet-Label">Crypto</InputLabel>
                <Select
                  labelId="CryptoGet-Label"
                  id="CryptoGet"
                  value={CryptoGet}
                  onChange={Get}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div id="down">
            <div>
              <h2>To</h2>
            </div>

            <div id="up-line">
              <TextField
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                
              />

              <FormControl id="Label-CryptoSend">
                <InputLabel id="CryptoSend-Label">Crypto</InputLabel>
                <Select
                  labelId="CryptoSend-Label"
                  id="CryptoSend"
                  value={CryptoSend}
                  onChange={Sender}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div id="Swap-Btn">
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </div>
        </div>
      </div>
    );
}
