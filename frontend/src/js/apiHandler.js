const API_URL = "http://localhost:8000/api/";

const LOGIN_URL = "http://localhost:8000/user/login";
const REGISTER_URL = "http://localhost:8000/user/register";

async function get(endpoint) {
    return await fetch(API_URL + endpoint, {
        method: "GET",
    })
        .then((response) => {
            if (!response.ok) {
                console.log("Error " + response.status);
                return null;
            }
            return response.json();
        })
        .catch((error) => console.log("Caught Error: " + error));
}

async function login(body) {
    return await fetch(LOGIN_URL, {
        method: "POST",
        body: body,
    })
        .then((response) => {
            if (!response.ok) {
                console.log("Error " + response.status);
                return null;
            }
            return response.json();
        })
        .catch((error) => console.log("Caught Error: " + error));
}

async function register(body) {
    return await fetch(REGISTER_URL, {
        method: "POST",
        body: body,
        redirect: "follow",
    })
        .then((response) => {
            if (!response.ok) {
                console.log(response);

                console.log("Error " + response.status);
                return null;
            }
            return response.json();
        })
        .catch((error) => console.log("Caught Error: " + error));
}

export { get, login, register };
