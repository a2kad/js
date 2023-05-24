const data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}

const row1 = document.getElementById('row1')
const listOfHeros = document.getElementById('listOfHeros')

row1.innerHTML = `
<h1>${data.squadName}</h1>
<p>Hometown: ${data.homeTown} // Formed: ${data.formed}</p>
`

data.members.forEach(element => {
    console.log(element);
    let colOfHero = document.createElement('div')
    listOfHeros.appendChild(colOfHero)
    
    
    colOfHero.classList.add('col')
    colOfHero.innerHTML = `
    <h2>${element.name}</h2>
    <p>Secret identity: ${element.secretIdentity}</p>
    <p>Age: ${element.age}</p>
    
    <p>Superpowers:</p>`
        element.powers.forEach(element =>{
            let listPower = document.createElement('ul')
            colOfHero.appendChild(listPower)
            listPower.classList.add('list-group')
            listPower.innerHTML = `<li class="list-group-item">${element}</li>`
        })

})

// for (let i = 0; i < 3; i++) {
//     let colName = 'col' + (i + 1)
//     console.log(colName)
//     document.getElementById(`${colName}`).innerHTML = `<p>${data.members[i].name}</p>`
    
// }