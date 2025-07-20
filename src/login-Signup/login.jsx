import { FaUser,FaLock  } from "react-icons/fa";


export default function Login(){
    return(
        <div>
            <div className="wrapper">

                <div className="form-box-login">
                    <form action="#">
                        <h1>Login</h1>

                        <div className="inp-box">
                            <input type="text" placeholder="Username" required/>
                            <FaUser />
                        </div>

                        <div className="inp-tbox">
                            <input type="password" placeholder="Password" required/>
                            <FaLock />
                        </div>

                        <div className="remember-forget">
                            <input type="checkbox" id="remember-me"/>

                            <label htmlFor="remember-me">Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn">Login</button>
                        <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>

                    </form>
                </div>
            </div>
        </div>

    )
}