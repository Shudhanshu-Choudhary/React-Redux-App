import { useState } from "react";

const SignIn = () => {

    const [mailId,setMailId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginDetails = {
            mailId,
            password
        }
        
    }

    return ( 
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    SignIn
                </h5>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                        value={mailId} 
                        id="email" 
                        required
                        onChange={e => setMailId(e.target.value)}
                    />

                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                         id="password"
                         value={password}
                         required
                         onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn pink lighten-1 z-depth-0">
                    Login
                </button>
            </form>
        </div>
     );
}
 
export default SignIn;