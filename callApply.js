const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Mia',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName + ' ' + this.lastName);
    },
    chargeBill: function(amount){
        return this.salary = this.salary - amount;
    }
}


const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000
}

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(24000);

// const heroPersonFullName = normalPerson.getFullName.bind(heroPerson);
// heroPersonFullName();
// heroPersonFullName();

// const golamFullName = normalPerson.getFullName.bind(friendlyPerson);
// golamFullName();


// console.log(heroPerson.salary);

normalPerson.chargeBill.call(heroPerson, 3000);
console.log(heroPerson.salary)