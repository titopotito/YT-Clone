import { useNavigate } from "react-router-dom";
import * as APIHandler from "../../js/apiHandler.js";

export default function Login() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        APIHandler.register(new FormData(e.target))
            .then((data) => {
                if (data !== null) navigate("/login");
            })
            .catch((error) => console.log(error));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" />
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
            <div>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" name="confirm_password" />
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}
