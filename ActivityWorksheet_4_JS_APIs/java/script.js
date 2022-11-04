const getUser = async () => {
    try {
        let body = await fetch("https://randomuser.me/api/")
        let parseData = await body.json()
        console.log(parseData);
        let user = parseData.results[0]
    
        let userDisplay = document.createElement("div")
        userDisplay.className = "card card-sh"
        userDisplay.innerHTML = (`
        <h4 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <p class="card-body">Email: ${user.email}</p>
        <img src="${user.picture.medium}" class="card-img-top">
        `)
        document.querySelector(".people").append(userDisplay)
    } 
    catch (error) {
        console.log(error);
        let userDisplay = document.createElement("div")
        userDisplay.innerText = "Could not load data from randomuser-api"
        document.querySelector(".people").append(userDisplay)
    }  
}

let userButton = document.querySelector("#user")
userButton.addEventListener("click", getUser)


