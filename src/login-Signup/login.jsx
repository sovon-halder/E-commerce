
export default function Login(){
    return(
        <div>
            <div className="wrapper">

                <div className="form-box-login">
                    <form action="#">
                        <h1>Login</h1>

                        <div className="textbox"></div>
                            <input type="text" placeholder="Username" />

                        <div className="textbox">
                            <input type="password" placeholder="Password"/>
                        </div>

                        <button className="btn">Login</button>
                        <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>

                    </form>
                </div>
            </div>
        </div>

    )
}