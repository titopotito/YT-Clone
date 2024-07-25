import CookieHandler from "./cookieHandler";

const LOCALHOST_URL = "http://localhost:8000/";
const API_URL = LOCALHOST_URL + "api/";
const LOGIN_URL = LOCALHOST_URL + "user/login";
const REGISTER_URL = LOCALHOST_URL + "user/register";

async function get(endpoint) {
    const response = await fetch(API_URL + endpoint, { method: "GET" });
    const data = await response.json();
    return data;
}

async function post(endpoint, body) {
    const response = await fetch(API_URL + endpoint, {
        method: "POST",
        headers: { Authorization: "Token " + CookieHandler.get("token") },
        body: body,
    });
    const data = await response.json();
    if (response.ok) return { isSuccess: response.ok, data: data };
    return { isSuccess: response.ok, errors: data };
}

async function del(endpoint) {
    const response = await fetch(API_URL + endpoint, {
        method: "DELETE",
        headers: { Authorization: "Token " + CookieHandler.get("token") },
    });
    if (response.ok) return { isSuccess: response.ok, message: "Delete request successful." };
    const errors = await response.json();
    return { isSuccess: response.ok, errors: errors };
}

async function login(body) {
    const response = await fetch(LOGIN_URL, {
        method: "POST",
        body: body,
    });
    const data = await response.json();
    if (response.ok) {
        CookieHandler.set("token", data.token);
        return { isSuccess: response.ok, message: "Login success!" };
    }
    return { isSuccess: response.ok, message: "Invalid credentials." };
}

async function register(body) {
    const response = await fetch(REGISTER_URL, {
        method: "POST",
        body: body,
        redirect: "follow",
    });
    if (response.ok) return { isSuccess: response.ok, message: "Registration complete!" };
    const errors = await response.json();
    return { isSuccess: response.ok, errors: errors };
}

export { get, post, del, login, register };
