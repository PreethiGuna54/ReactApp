import Counter from "./Counter"

function Profile(props){
    return(
        <>
        <div className='border'>
            <img src={props.image} className="profile-pic" alt="" />
            <h4>Hi {props.nickName}</h4>
           
        </div>
        <Counter/>
        </>
    )
}

export default Profile
//className --- As class is a reserved keyword in OOPS concept