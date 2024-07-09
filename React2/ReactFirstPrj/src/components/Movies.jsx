import '../App.css'
import MovieCounter from './MovieCounter'
function Movies(movs){
   {console.log(movs)} 
    return(
        <>
        <div className="films" id='movs.index'>
            <h4>{movs.name}</h4>
            <a> <img src={movs.image} alt="" className="movieImage" onClick={()=>{
                
                <h4>{movs.summary}</h4> }}/> </a>
            <div className='rating'>
                <h5> Rating  {movs.rating} </h5>
                <MovieCounter className='moviesbtn' movs={movs}/>
              
              
            </div>
           
        </div>
        
        </>
    )
}
export default Movies