import React,{ useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import { TextField, Button, Box, Typography } from "@material-ui/core";
import { errorNotification } from "../helpers/niceAlerts";

export default function NewItem({ setItems, items }) {
  const nameRef = useRef()
  const fullQuantityRef = useRef()
  const currentQuantityRef = useRef()

  const addItem = () => {
    /* Get values from inputs */
    const name = nameRef.current.value
    const fullQuantity = Number(fullQuantityRef.current.value)
    const currentQuantity = Number(currentQuantityRef.current.value)

    /* Item validation */
    if(!name){
      nameRef.current.focus()
      return errorNotification('Name is required')
    }
    if (!fullQuantity || fullQuantity < 0 || isNaN(fullQuantity)){
        fullQuantityRef.current.focus()
        return errorNotification('Full quantity should be positive number')
      }
    if(!currentQuantity || currentQuantity < 0 || isNaN(currentQuantity)){
      currentQuantityRef.current.focus()
      return errorNotification('Current quantity should be positive number')
    }
    if(currentQuantity > fullQuantity){
      currentQuantityRef.current.focus()
      return errorNotification('Current quantity cannot be bigger than full quantity')
    }
    if (items.find((item) => item.name.toUpperCase() === name.toUpperCase())){
      return errorNotification('Item already exist')
    }
    
    /* Add item to all items */
    setItems([...items, { name, fullQuantity, currentQuantity }])

    /* Reset the inputs */
    nameRef.current.value = ''
    fullQuantityRef.current.value = ''
    currentQuantityRef.current.value = ''
  }

    return (
        <div style={{textAlign: 'center'}}>
        <Box
          component="form"
          sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <Typography 
          variant="h5"
          color="primary"
          component="h2"
          gutterBottom
        >
        Add New Item
        </Typography>
        <div className="App">
        <div>
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Item name"
            variant="outlined"
            inputRef={nameRef}
            />
          <br />
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Full quantity"
            variant="outlined"
            inputRef={fullQuantityRef}
            />
          <br />
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Current quantity"
            variant="outlined"
            inputRef={currentQuantityRef}
            />
          <br />
          <Button
            onClick={() => addItem()} 
            startIcon={<AddIcon/>} 
            variant="contained"
            color="primary"
            size='large'
             >
              Add Item
            </Button>
        </div>
        </div>
        </Box>
        <br/>
        </div>
    )
}
