import { useNavigate } from "react-router-dom";
import * as APIHandler from "../../js/apiHandler.js";

export default function Login() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await APIHandler.register(new FormData(e.target));
            response.isSuccess ? navigate("/login") : console.log(response.errors);
        } catch {
            console.log("Encountered an error.");
        }
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
