function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    const apiKey = "your-placeholder-api-key"; // Replace with a valid API key

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to submit data");
            }
            return response.json();
        })
        .then(data => {
            const id = data.id;
            document.body.innerHTML += `<p>New user ID: ${id}</p>`;
            return data;
        })
        .catch(error => {
            document.body.innerHTML += `<p>Error: ${error.message}</p>`;
            throw error;
        });
}

module.exports = submitData;
