const btnMinus = document.getElementById('btnMinus')
const btnPlus = document.getElementById('btnPlus')
const showAll = document.getElementById('showAll')
const clientTable = document.getElementById('clientTable')
const bal = document.getElementById('bal')


// let objectsNames = ''
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
    oDate = new Date(1990, i, 10 + i)
    oBalance = 1000 * (i + 1)
    oNum = 'NUM0000' + i
    let objectsNames = new Compt(oName, oSurname, oDate, oBalance, oNum)
    baseClient.push(objectsNames)
    console.log(objectsNames)

}


baseClient.forEach(element => {
    console.log(element.accountNumber)
    clientTable.innerHTML += `
    <tr>
        <td>${element.accountNumber}</td>
        <td>${element.surname}</td>
        <td id="bal${element.accountNumber}">${element.balance} &euro;&nbsp;</td>
        <td id="showAll" class="showAll">
            <div class="row justify-content-end">
                <div class="col">
                    <button type="button" class=" btn btn-secondary btn-sm" id="btnMinus" onclick="${element.remouve(element.balance, element.accountNumber)}" >-10 &euro;</button>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-secondary btn-sm" id="btnPlus" onclick="${element.add(element.balance, element.accountNumber)}"  >+10 &euro;</button>
                </div>
                <div class="col">
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
                </div>
            </div>
        </td>
    </tr>
    `
});



bal.innerText = oBalance

btnMinus.addEventListener('click', function () {
    console.log('minus')
    oBalance -= 10
    bal.innerText = oBalance
})
btnPlus.addEventListener('click', function () {
    console.log('plus')
    oBalance += 10
    bal.innerText = oBalance
})