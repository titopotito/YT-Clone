const API_URL = "http://localhost:8000/api/";

const LOGIN_URL = "http://localhost:8000/user/login";
const REGISTER_URL = "http://localhost:8000/user/register";

async function get(endpoint) {
    return await fetch(API_URL + endpoint, {
        method: "GET",
    })
        .then((response) => {
            if (response.ok) return response.json();
            else {
                console.log(response);
                return null;
            }
        })
        .catch((error) => console.log("ERROR REQUEST: " + error));
}

async function login(body) {
    return await fetch(LOGIN_URL, {
        method: "POST",
        body: body,
    }).then((response) => {
        if (!response.ok) {
            if (response.status === 401) console.log("User does not exist.");
            return null;
        } else {
            return response.json();
        }
    });
}

export { get, login };
