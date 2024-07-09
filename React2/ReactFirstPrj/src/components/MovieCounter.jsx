import { useState } from "react";
import Movies from "./Movies";
import '../App.css'


function MovieCounter(mvs){
   const[like,setLike]=useState(1);
   const[dislike,setDislike]=useState(1); 
   const[btnpress,setBtnpress]=useState(false);
  
    return(
        <>
        <div className="moviesbtn">
        <button  onClick={()=>{
        setLike(like+1)
        setBtnpress(true)
        }
       }>👍{like+1}</button>


    <button onClick={()=>{
        setDislike(dislike+1)
        }
       }>👎{dislike}</button>
        </div>
       
       
       
    {
        btnpress && <div className="btnpressdiv">Movie liked by You</div>
    }
     
       
        </>
    )
}

export default MovieCounter