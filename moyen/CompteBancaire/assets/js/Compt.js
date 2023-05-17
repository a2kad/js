class Compt {
    /**
     * Création du compte
     * @param {string} name - Prénom
     * @param {string} surname - Nom
     * @param {date} dateOfBirth - Date de naissance
     * @param {number} balance - Solde
     * @param {string} accountNumber - Numéro de compt
     */
    constructor(name, surname, dateOfBirth, balance, accountNumber){
        this.name = name, 
        this.surname = surname, 
        this.dateOfBirth = dateOfBirth, 
        this.balance = balance, 
        this.accountNumber = accountNumber
    }
    /**
     * Créditer le compte
     */
    add(){
        console.log('Créditer le compte')
    }
    /**
     * Débiter le compte
     */
    remouve(){
        console.log('Débiter le compte')
    }
    /**
     * Affiche les infos
     */
    showAll(){
        console.log('Show All')
    }
}