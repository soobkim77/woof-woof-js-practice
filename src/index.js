function fetchDogs(){
    fetch("http://localhost:3000/pups")
    .then(r => r.json())
    .then(pups => {
        pups.forEach(pup => fillDogBar(pup))
    })
}

function fillDogBar(pup){
    const dogBar = document.getElementById("dog-bar")
    const span = document.createElement("span")
    span.textContent = pup.name
    dogBar.appendChild(span)
    span.addEventListener('click', () => {
        let dogInfo = document.querySelector("#dog-info")
        let img = document.createElement("img")
        let h2 = document.createElement("h2")
        let btn = document.createElement("button")
        img.src = pup.image
        h2.textContent = pup.name
        if(pup.isGoodDog == true){
            btn.textContent = "Good Dog!"
        } else {
            btn.textContent = "Bad Dog!"
        }
        dogInfo.append(img, h2, btn)
        btn.addEventListener("click", () => {
            if (btn.textContent == "Good Dog!"){
                const pupID = pup.id
                btn.textContent = "Bad Dog!";
                let badDog = {"isGoodDog": false}
                fetch(`http://localhost:3000/pups/${pupID}`,{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "appplication/json"
                    },
                    body: JSON.stringify(badDog)
                })
                .then(r => r.json())
                .then(pup => console.log(pup))
            } else if (btn.textContent == "Bad Dog!") {
                const pupID = pup.id
                btn.textContent = "Good Dog!";
                let goodDog = {"isGoodDog": true}
                fetch(`http://localhost:3000/pups/${pupID}`,{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(goodDog)
            }
                )
                .then(r => r.json())
                .then(pup => console.log(pup))
    }
    })
})
}

fetchDogs();

// function fetchDogBar(){
//     fetch("http://localhost:3000/pups")
//     .then(r => r.json())
//     .then(pups => {
//         pups.forEach(pup => {
//             const newDog = addDogContainer(pup, dogBar())
//             document.getElementById("dog-info"),appendChild(newDog)
//     })
// })
// }


// function dogBar(){
//     debugger
//     const dBar = document.getElementById("dog-bar")
//     const span = document.createElement("span")
//     // span.textContent = pup.name
//     dBar.appendChild(span)
//     span.addEventListener("click", dogInfo)
//     }


// function dogInfo(pup){
//     let div = document.createElement("div")
//     let img = document.createElement("img")
//     let h2 = document.createElement("h2")
//     let btn = document.createElement("button")
//     div.append(img, h2, btn)
//     return div
// }

// function addDogContainer(p, c){
//     c.id = p.id
//     c.querySelector("img").src = p.image
//     c.querySelector("h2").textContent = p.name
//     if (p.isGoodDog == true){
//         c.querySelector("btn").textContent = "Good Dog!"
//     } else {
//         c.querySelector("btn").textContent = "Bad Dog!"
//     }
// }
// fetchDogBar();