import { useState } from "react";

function Counter(){
const[like,setLike]=useState(1);
const[dislike,setDislike]=useState(100)
const[btnpress,setBtnpress]=useState(false)
    return(
        <>
        <button 
        onClick={()=>{
            setLike(like+1)
            setBtnpress(true)
        }}>{like}</button>
        
        <button onClick={()=>{
            setDislike(dislike+1)
        }}>{dislike}</button>
        {
            btnpress && <div>LikeBtn Pressed</div>
        }
        </>
        
    )
}

export default Counter
//Hooks
//Functions
//useState()
//const[state,setState]=useState(1)
