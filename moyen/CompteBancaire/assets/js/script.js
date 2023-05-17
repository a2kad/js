const accountNumber = document.getElementById('accountNumber')
const surname = document.getElementById('surname')
const showAll = document.getElementById('showAll')
const clientTable = document.getElementById('clientTable')


let objectsNames = ''
let oName = ''
let oSurname = ''
let oDate = ''
let oBalance = 0
let oNum = ''
let baseClient = []
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

for (let i = 0; i <= 9; i++) {
    oName = 'Name' + i
    oSurname = 'Surname' + i
    oDate = new Date(1990, i, 10+i)
    oBalance = 1000 * (i+1)
    oNum = 'NUM0000' + i
    let objectsNames = new Compt(oName, oSurname, oDate, oBalance, oNum)
    baseClient.push(objectsNames)
    console.log(objectsNames)
}
baseClient.forEach(element => {
    console.log(element.accountNumber)
    clientTable.innerHTML += `
        <tr>
            <td id="accountNumber">${element.accountNumber}</td>
            <td id="surname">${element.surname}</td>
            <td id="showAll" class="showAll text-end">

            <div class="dropdown">
                <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Plus d'info
                </button>
                <div class="dropdown-menu dropdown-menu-end p-4 text-body-secondary" style="max-width: 700px;">
                    <p class="mb-0">
                    <b>Prénom : </b>${element.name}
                    </p>
                    <p class="mb-0">
                    <b>Nom : </b>${element.surname}
                    </p>
                    <p class="mb-0">
                    <b>Date de naissance : </b>${element.dateOfBirth.toLocaleString("fr-FR", options)}
                    </p>
                    <p class="mb-0">
                    <b>Solde : </b>
                    ${element.balance} &euro;
                    </p>
                    <p class="mb-0">
                    <b>Numéro de compt : </b>
                    ${element.accountNumber}
                    </p>
                </div>
            </div>
            
            </td>
            
        </tr>
    `
});