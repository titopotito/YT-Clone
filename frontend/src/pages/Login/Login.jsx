import { useNavigate } from "react-router-dom";
import * as APIHandler from "../../js/apiHandler.js";
import CookieHandler from "../../js/cookieHandler.js";

export default function Login() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        APIHandler.login(new FormData(e.target))
            .then((token) => {
                console.log(token);
                if (token !== null) {
                    CookieHandler.set("token", token);
                    navigate("/");
                }
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
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}
