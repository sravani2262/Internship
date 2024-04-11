import './Profile.css';
import { Link } from 'react-router-dom';
export default function Profile(){
    return(
        <div className="outside-container">
            <div className="login">
            <div className="username-container">
                <input placeholder='Username'/>
            </div>
            <div className="username-container">
            <input placeholder='Password'/>
            
            </div>
            <button className='practice-button text'>Login</button>
            <p className="para">Don't have an account?  <Link to="/signup">Sign Up</Link> </p>
            </div>
           
        </div>
    )
}