import React ,{useState} from 'react'
import { TextField, FormControl, Select , MenuItem , InputLabel , Slider , Button} from "@material-ui/core";

import './main.css'


export default function Transfer() {

  
  const [CryptoSend, setCryptoSend] = useState("");

    const Sender = (e) => {
      setCryptoSend(e.target.value);
    };


    return (
      <div id="box">
        <div id="rhead">
          <h3>Source:</h3>
          <br />
          <h4>WalletADD</h4>

          <div id="radd">
            <h3>Amount:</h3>
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
            <div id="recadd">
              <TextField
                id=""
                label="Reciever"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div>
              <Slider id="slider" />
            </div>

            <Button id="Transfer-btn" variant="contained" color="primary">
              Primary
            </Button>
          </div>
        </div>
      </div>
    );
}
