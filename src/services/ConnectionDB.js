const apiUrl = 'http://172.31.5.32:5000/signup';

async function connectionDB (user) {

    console.log(`User: ${user.userEmail}`);

    response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(user)
    });

}

export default connectionDB;