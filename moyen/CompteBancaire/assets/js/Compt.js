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
    add(balance) {
        this.balance = balance + 10
        console.log('Créditer le compte +10')
        return balance
    }
    /**
     * Débiter le compte
     */
    remouve() {
        this.balance = balance - 10
        console.log('Débiter le compte -10')
        return balance
    }
    /**
     * Affiche les infos
     */
    showAll() {
        console.log('Show All')
    }
}