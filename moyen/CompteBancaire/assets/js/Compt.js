class Compt {
    /**
     * Création du compte
     * @param {string} name - Prénom
     * @param {string} surname - Nom
     * @param {date} dateOfBirth - Date de naissance
     * @param {number} balance - Solde
     * @param {string} accountNumber - Numéro de compt
     */
    constructor(name, surname, dateOfBirth, balance, accountNumber) {
        this.name = name,
            this.surname = surname,
            this.dateOfBirth = dateOfBirth,
            this.balance = balance,
            this.accountNumber = accountNumber
    }
    /**
     * Créditer le compte
     */
    add(balance,accN) {
        console.log('Créditer le compte +10')
        this.accN = accN
        this.balance = balance
        balance += 10
        return `bal${accN}.innerHTML = '${balance} &euro;'`
    }
    /**
     * Débiter le compte
     */
    remouve(balance, accN) {
        console.log('Débiter le compte -10')
        this.accN = accN
        this.balance = balance
        balance -= 10
        return `bal${accN}.innerHTML = '${balance} &euro;'`
    }
    /**
     * Affiche les infos
     */
    showAll() {
        console.log('Show All')
    }
}