import About from "../about/About"

function Home(props){
    console.log(props.fname)
    console.log(props.lname)
    return(
        <>
        <h1>Welcome to our Page,Home Page</h1>
        <h1>{props.fname}{props.lname}</h1>
        <About/>
        </>
        
    )
}

export default Home

//properties > props
//props is parameters and arguments