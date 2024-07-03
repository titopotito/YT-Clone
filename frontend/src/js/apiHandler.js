const SERVER_URL = "http://localhost:8000/api/";

async function get(route) {
    return await fetch(SERVER_URL + route, {
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

export { get };
