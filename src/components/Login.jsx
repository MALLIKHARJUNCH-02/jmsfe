import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();


    const LoginHandler = async (e) => {

        e.preventDefault();


        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email: email,
                password: password
            })

            console.log(response.data);

            if (response.data.success === true) {
                navigate("/jobs");
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            console.log(error.response)
            console.log(error.response.data);
            setMessage(error.response.data.message);

        }

    }
    return (

        <section className="flex flex-col h-screen justify-center items-center align-center gap-10">

            <h1>Login</h1>


            <form onSubmit={LoginHandler} className="flex flex-col gap-10">

                <input className="border" type="text" placeholder="Enter User Email" onChange={(e) => setEmail(e.target.value)} />

                <input className="border" type="text" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />


                <button type="submit" className="border-2 border-green-500 rounded-xs">Login</button>


                <span>{message}</span>
            </form>

        </section>
    )
}

export default Login;