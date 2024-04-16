import { Link, useNavigate } from "react-router-dom";
import reactlogo from "../../assets/react.svg"
import { useState } from "react";
import axios from 'axios';

const Login = (props) => {

    const navigate = useNavigate();

    const [isDemoLoginButtonsHidden, setIsDemoLoginButtonsHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const toggleDemoLogin = (e) => {
        e.preventDefault();
        const buttonElement = document.getElementById("test-login-buttons-container");
        if (isDemoLoginButtonsHidden) {
            buttonElement.classList.remove('hidden');
            setIsDemoLoginButtonsHidden(false);
        } else {
            buttonElement.classList.add('hidden');
            setIsDemoLoginButtonsHidden(true);
        }
    }

    const handleLogin = () => {
        axios.post('http://localhost:8080/login', { email, password })
            .then(response => {
                const { data } = response;
                // Assuming the backend returns a success message or user data upon successful login
                console.log('Login successful:', data);
                // Redirect the user to the main page upon successful login
                navigate('/');
            })
            .catch(error => {
                console.error('Login failed:', error);
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data);
                } else {
                    setErrorMessage('An error occurred while logging in.');
                }
            });
    };


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

            <div className="hidden-buttons-container flex justify-center mt-5 gap-5 hidden" id="test-login-buttons-container" >
                <div className="user-login border p-4">
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <input
                        className="border p-2"
                        type="email"
                        placeholder="demo.user@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> <br />
                    <input
                        className="border p-2 mt-2"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /> <br />
                    <button className="rounded-md bg-yellow-600 p-2 mt-2" onClick={handleLogin}>Login - As User</button>
                    {/* <button className="rounded-md bg-orange-500 p-2 mt-2" onClick={handleLogin}>Login - As Admin</button> */}

                </div>
            </div>

        </div>
    )
}

export default Login;