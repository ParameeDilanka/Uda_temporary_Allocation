import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Homepage() {

    const history = useHistory()

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 my-5">                    
                    <img src="../images/uda1.jpg" width="1500px" height="100%" alt="appImage" style={{ borderRadius: 400/25, paddingLeft:"100px"}}/>
                </div>
                <div className="col-4 my-5">  
                </div>                    
            </div>
        </div>
    )
}

export default Homepage