import Button from "../Button/Button"
import { useState } from "react";

export default function Login(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    return(
        <>
        <section className="login-section">
            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" placeholder="Input your email" onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <br />
            <div>
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" placeholder="Input your password" onChange={(event) => setPassword(event.target.value)}/>
            </div>

            <div className="forgot">
                <a href="#">Forgot your password?</a>
            </div>
            <br />
            <div className="sumbit">
                <Button>Login</Button>
            </div>
            
        </section>
        </>
    )
}