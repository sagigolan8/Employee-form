import React from 'react'

import { useLocation } from 'react-router-dom';
export default function Send() {
    const location = useLocation();
    const {state:{user}} = location
    
    const CapitalizeName = s => s.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ') 
    const name = CapitalizeName(user.name)
    
    return (
                <div className="send">
                    <div className="wrapper">
                        <div style={{textAlign:'center'}} className="typing-demo">
                        Thank You 
                         <div style={{textAlign:'center'}}><b>{name}</b></div>
                        </div>
                    </div>
            </div>
    )
}
