function newPage() {
    fetch('https://randomuser.me/api/?nat=fr')
        .then((reponse) => reponse.json())
        .then(data => {
            console.log(data)
            let userCard = document.getElementById('card')
            for (const result of data.results) {
                userCard.innerHTML = `
                <img src="${result.picture.large}" class="card-img-top mt-3" alt="User photo">
                <div class="card-body">
                    <h5 class="card-title">${result.login.username}</h5>
                    <p class="card-text"></p>
                <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${result.name.title} ${result.name.first} ${result.name.last}</li>
                    <li class="list-group-item">Age : ${result.dob.age} ans</li>
                    <li class="list-group-item">Departement : ${result.location.state}</li>
                    <li class="list-group-item">Ville : ${result.location.city}</li>
                    <li class="list-group-item">Code postale : ${result.location.postcode}</li>
                </ul>
    `
            }
        })
}

function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=le havre&appid=6af49a0f7d7a55d7451f325b2d6318c8&units=metric')
    .then((reponse) => reponse.json())
    .then(data =>{
        console.log(data.name)
    //     for(const result of data){
    //     console.log(result)
        
    // }
    })
}

newPage()
getWeather()

document.getElementById('reload').addEventListener('click', function () {
    newPage()
    
})