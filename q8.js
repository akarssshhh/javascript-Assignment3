async function fetchuser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const user = await response.json();

        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);

    } catch (error) {
        console.log("Something went wrong");
        console.log(error.message);
    }
}

fetchuser();