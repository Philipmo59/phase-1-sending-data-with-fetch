function submitData(userName,userEmail){
    return fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        "name": userName,
        "email": userEmail,        
    })
})
.then(res => res.json())
// .then(document.getElementById("1").appendChild(response))
.then(response=> document.body.append(response.id))
.catch(error=> document.body.append(error.message))
}

submitData("philip","philipmo59@gmail.com")