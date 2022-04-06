import React,{ useEffect, useRef, useState } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateUser } from '../reducers/userSlice'
import SignaturePad from 'react-signature-canvas'
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { Typography } from '@mui/material';
import { successNotification } from "../helpers/niceAlerts";
import ReplayIcon from '@mui/icons-material/Replay';

export default function WorkerDetails() {
  const dispatch = useDispatch(); //Update user info when details(name,place,date) change 
  const nameRef = useRef()
  const placeRef = useRef()
  const dateRef = useRef()
  const currentDate = moment(new Date()).format("YYYY-MM-DD")
  const signRef = useRef({})
  const [data, setData] = useState('')//Signature data

  const changeUser = ()=> {
    const name = nameRef.current.value
    const place = placeRef.current.value
    const date = dateRef.current.value
    dispatch(updateUser({
      user: {
        name,
        place,
        date
      }
    }))
  }

  useEffect(() => {
    saveSign()
  }, [])

  const saveSign = ()=>{
    setData(signRef.current.toData())
    if(data.length){
      successNotification('Signature Saved!')
    }
  }
  
  const clearSign = ()=>{
    signRef.current.clear()
  }
  
  const showSign = ()=>{
    signRef.current.fromData(data)
  }

    return (
      <div style={{textAlign: 'center'}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
    <div className="App">
      <div>
        <br />
        <TextField
          onChange={()=>changeUser()}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Worker Full Name"
          variant="outlined"
          inputRef={nameRef}
          className="worker-name"
          />
        <br />
        <TextField
          onChange={()=>changeUser()}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Work Place"
          variant="outlined"
          inputRef={placeRef}
          className="worker-place"
          />
        <br />
        <TextField
          onChange={()=>changeUser()}
          style={{ width: "200px", margin: "5px",textAlign:'center' }}
          name="date"
          label="Date"
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          defaultValue={currentDate}
          fullWidth
          inputRef={dateRef}
          className="worker-date"
          />
        <br />
        <Typography
          variant="h6"
          color="#3f51b5"
          component="h2"
          gutterBottom
        >
        Worker Signature
        </Typography>
        <div className="sigCanvas-wrapper" style={{border:'2px solid #3f51b5',display:'inline-block'}}>
        <SignaturePad 
          penColor='#3f51b5' ref={signRef} 
          canvasProps={{width: 300, height: 200, className: 'sigCanvas'}}
        />
        <Button onClick={()=>saveSign()}><SaveRoundedIcon color="primary"/></Button>
        <Button onClick={()=>clearSign()}><BackspaceRoundedIcon color="primary"/></Button>
        <Button onClick={()=>showSign()}><ReplayIcon color="primary"/></Button>
       </div>
      </div>
       <br/>
    </div>
    </Box>
    </div>
  )
  }