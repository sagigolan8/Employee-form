import React from 'react'
import Equipments from './Equipments'
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { errorNotification } from '../Helpers/NiceAlerts'
import Header from './Header';
import ScrollToTop from 'react-scroll-up'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import WorkerDetails from './WorkerDetails';
import '../styles/style.scss'
import Rotate from './Rotate';
import SendIcon from '@mui/icons-material/Send';

export default function Form() {
    const { user } = useSelector(({ user }) => user); //Get user details name,place,date
    const navigate = useNavigate()

    const sendForm = ()=>{
        const { name, place, date } = user
        /*Form validation*/
        if(!name){
            document.querySelector('.worker-name').children[1].firstChild.focus()
            return errorNotification('Worker name should be filled')
        }
        if(!place){
            document.querySelector('.worker-place').children[1].firstChild.focus()
            return errorNotification('Worker placement should be filled')
        }
        if(date.split('-')[0] > 2022 || date.split('-')[0] < 2012){
            document.querySelector('.worker-date').children[1].firstChild.focus()
            return errorNotification('Year is not valid try 2012-2022')
        }

        /* Form navigation after validation */
        navigate('/send',{
            state:{
                user,
            }
        })
    }
    
    return (
        <div className="employee-form" >
        <Header />
        <WorkerDetails  />
        <Equipments />
        <Button
          style={{textAlign:'center'}}
          onClick={()=>sendForm()}
          size='large'
          startIcon={<SendIcon/>} 
          variant="contained"
          color="default"
        >
        submit 
        </Button>
        <br />
        <br />
        <ScrollToTop showUnder={160}>
        <ArrowUpwardIcon />
        </ScrollToTop>
        <Rotate />
        </div>
    )
}
