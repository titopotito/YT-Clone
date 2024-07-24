import { useNavigate } from "react-router-dom";
import * as APIHandler from "../../js/apiHandler.js";

export default function Login() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await APIHandler.login(new FormData(e.target));
            response.isSuccess ? navigate("/") : console.log(response.message);
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
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}
