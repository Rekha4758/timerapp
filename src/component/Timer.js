import React from 'react'

function Timer(props) {


    return (
        <div className={props.second%2 === 0 ? "mainContainer" : "container"}>
        
                   <div className="inner-div">{props.hour}</div>
                    <div className="inner-div">{props.minute}</div>
                   <div className="inner-div">{props.second} </div> 
            </div>
    
    )
}

export default Timer;
