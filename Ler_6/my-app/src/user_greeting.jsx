
import PropTypes from 'prop-types';
function UserGreeting(props) {

    // 1.
    // if(props.IsLoggedIn){
    //     return <h1>Welcome back, {props.username}</h1>
    // }else{
    //     return <h1>Please login to continue</h1>
    // }


    // 2.
    // return(
    //     props.IsLoggedIn ? <h1 className="welcome-msg">Welcome back, {props.username}</h1> :
    //                        <h1 className="login-prompt">Please login to continue</h1>
    // );


    // 3.
    const welcomemsg = <h1 className="welcome-msg">
        Welcome back, {props.username}</h1>

    const loginprompt = <h1 className="login-prompt">
        Please login to continue</h1>

    return (
        props.IsLoggedIn ? welcomemsg : loginprompt
    )
}

UserGreeting.PropTypes = {
    IsLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,


}
UserGreeting.defaultProps = {
    IsLoggedIn: false,
    username: "Guest"
}
export default UserGreeting;