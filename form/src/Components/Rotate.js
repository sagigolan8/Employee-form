import React, { useState } from 'react'
import ReplayIcon from '@mui/icons-material/Replay';

export default function Rotate() {
 const [rotate, setRotate] = useState({display: ''}) 
 return (
    <div onClick={()=> setRotate({display: 'none'})} style={rotate}  className="rotate">
        <div className="overlay">
            <div className="iconContainer">
                <div className="phone"><span className="rotate-icon"><ReplayIcon style={{transform: 'rotateY(180deg)'}}/></span></div>
            <p className="ask-rotate"><b>Recommended</b> rotate your device!</p>
            </div>
        </div>
    </div>
  )
}
