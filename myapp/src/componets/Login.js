import {useNavigate} from "react-router-dom"

export default function Login(){

    const navigate =useNavigate();
    const aunthenticate=()=>{
        navigate('/dash')
    }

    

    
    return(
        <div>
            <h1> Login here!</h1>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username" value=</td>
                </tr>
            </table>
            <button onClick={aunthenticate}>Login</button>
            
        </div>
    );
}