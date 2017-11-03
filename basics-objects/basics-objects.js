var formation = {
    name: 'Mobile training',
    language: 'JavaScript',
    beginDate: '28/09/2017',
    endDate: '18/12/2017',
    interns: [{
        firstName: 'Thomas',
        lastName: 'FOLMER'
    },{
        firstName: 'Arnaud',
        lastName: 'RINGENBACH'
    }]
}

console.log("Name : ", formation.name, "\nLanguage : ", formation.language)
console.log("B : ", formation.beginDate, "\nE : ", formation.endDate)

formation.instructor = {
    firstName: 'Nicolas',
    lastName: 'HODICQ'
}

console.log("Instructor : ", formation.instructor.firstName)

formation.description = function () {
    return "Name : " + this.name + "\nB : " + this.beginDate + "\nE : " + this.endDate
}

console.log('Description\n', formation.description())

console.log(formation)
delete formation.interns
console.log(formation)