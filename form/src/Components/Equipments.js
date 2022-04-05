import React,{ useState, useEffect } from 'react'
import { rows } from '../Helpers/EquipmentsList'
import TextField from "@material-ui/core/TextField";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import NewItem from './NewItem';
import { useDispatch } from 'react-redux';
import { updateEquipment } from '../Reducers/equipmentSlice';
import { Container } from '@material-ui/core';
import { deleteAlert } from '../Helpers/NiceAlerts';

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  export default function Equipments() {
    const [currQuantity, setCurrQuantity] = useState(0) //current quantity
    const [items, setItems] = useState(rows)//Fill table rows with all equipments from our local db
    const dispatch = useDispatch()

    useEffect(() => updateEquipmentList(), [items]) //update equipment list whenever items changed

    const updateEquipmentList = () => {
      /* [].slice.call turn HTMLCollection into Array, then we can use the array with array's methods */
      let itemsArray = [].slice.call(document.getElementsByClassName('item')) //Array of items ['Gloves','Boots'...] 
      let missingItemsArray = [].slice.call(document.getElementsByClassName('missing'))

      /*Get the name from the items state and the current quantity from the table */
      itemsArray = itemsArray.map((item, i) => {
        let { firstChild: { value } } = item.firstChild
        const { name } = items[i]
        return { value, name }
      })
      
      dispatch(updateEquipment(itemsArray))

      //Decrease the current quantity from full quantity and get the missing quantity
      missingItemsArray.forEach((item, i) => item.textContent = items[i].fullQuantity - itemsArray[i].value)
    }

    const changeQuantity = (e)=> setCurrQuantity(e.target.value)

    const saveQuantity = (e,fullQuantity)=>{
      if(!e.target.value || isNaN(e.target.value) || e.target.value < 0)
      e.target.value = currQuantity
      if(e.target.value > fullQuantity)
      e.target.value = fullQuantity
      updateEquipmentList()
    }

    const deleteItem = (name) => setItems(items.filter((item) => item.name !== name))

    const handleDeleteItem = async (name) => {
      const isDeleted = await deleteAlert("Are you sure you want to delete this item?") 
      if(isDeleted){
        deleteItem(name)
      }
    }
    return (
      <>
        <Container>
          <TableContainer component={Paper}>
          <Typography
            variant="h3"
            color="primary"
            component="h2"
            gutterBottom
          >
          Equipments List
          </Typography>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Equipment</StyledTableCell>
                  <StyledTableCell align="center">Full&nbsp;quantity</StyledTableCell>
                  <StyledTableCell align="center">Current&nbsp;quantity</StyledTableCell>
                  <StyledTableCell align="center">Missing</StyledTableCell>
                  <StyledTableCell align="center">Delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item,i) => (
                    <StyledTableRow  key={item.name}>
                      <StyledTableCell component="th" scope="row">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">{item.fullQuantity}</StyledTableCell>
                      <StyledTableCell align="center">
                      <TextField
                        className='item'
                        onChange={(e)=>changeQuantity(e)}
                        onBlur={(e)=>saveQuantity(e,item.fullQuantity)}
                        variant="outlined"
                        color="primary"
                        type="text"
                        style={{ maxWidth: 70 }}
                        defaultValue={item.currentQuantity}
                      />
                      </StyledTableCell>
                      <StyledTableCell className='missing' align="center"></StyledTableCell>
                      <StyledTableCell align="center">
                      <Button 
                        onClick={() => handleDeleteItem(item.name)} 
                        disabled={i<7} // => we want to disable the option to delete permanent item  
                      >
                      <DeleteIcon/>
                      </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      <br/>
      <NewItem setItems={setItems} items={items}/>
      </>
    )
  }
