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

for (let i = 0; i <= 9; i++) {
    objectsNames = 'client' + i
    oName = 'Name' + i
    oSurname = '' + i
    oDate = Date(1990, i, 1)
    oBalance = 100 * i
    oNum = 'NUM0000' + i
    let objectsNames = new Compt(oName, oSurname, oDate, oBalance, oNum)
    baseClient.push(objectsNames)
}
baseClient.forEach(element => {
    clientTable.innerHTML += `
        <tr>
            <td id="accountNumber">${element.accountNumber}</td>
            <td id="surname">${element.name}</td>
            <td id="showAll"></td>
        </tr>
    `
});