import { Link } from "react-router-dom";

import reactlogo from "../../assets/react.svg"
import { useState } from "react";

const Login = (props) => {
    const [isDemoLoginButtonsHidden, setIsDemoLoginButtonsHidden] = useState(true);

    const toggleDemoLogin = (e) => {
        e.preventDefault();
        const buttonElement = document.getElementById("test-login-buttons-container");
        if (isDemoLoginButtonsHidden) {
            buttonElement.hidden = false;
            setIsDemoLoginButtonsHidden(false);
        } else {
            buttonElement.hidden = true;
            setIsDemoLoginButtonsHidden(true);
        }
    }

    return (
        <div className="content-wrapper text-center mx-auto max-w-2xl lg:max-w-none">

            <div className="login-links flex py-2 place-content-center">
                {/* idk.. examples. pick if you want more */}
                <Link to={"#"}><img src={reactlogo} alt="facebook-icon" /></Link>
                <Link to={"#"}><img src={reactlogo} alt="google-icon" /></Link>
                <Link to={"#"}><img src={reactlogo} alt="github-icon" /></Link>
            </div>

            <div className="test-login-notice mx-auto max-w-2xl">
                <h3 className="font-bold">For HR / Hiring Testing:</h3>
                <p className="">We understand that it may not be desirable to use your personal logins to test the functionality of our site; if you're one of these people, please follow the login instructions available after clicking this button:</p>
                <button className="rounded-md bg-cyan-500 p-2 my-4" onClick={toggleDemoLogin}>Demo Login</button>
            </div>
            <div className="hidden-buttons-container" id="test-login-buttons-container" hidden>
                <button className="rounded-md bg-yellow-600 p-2 mx-1">Login - As User</button>
                <button className="rounded-md bg-orange-500 p-2 mx-1">Login - As Admin</button>
            </div>

        </div>
    )
}

export default Login;