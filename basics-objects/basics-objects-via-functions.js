
function Formation (name, language, beginDate, endDate) {
    this.name = name || 'Mobile training'
    this.language = language || 'JavaScript'
    this.beginDate = beginDate || '28/09/2017'
    this.endDate = endDate || '18/12/2017'
    this.interns= [{
        firstName: 'Thomas',
        lastName: 'FOLMER'
    },{
        firstName: 'Arnaud',
        lastName: 'RINGENBACH'
    }]
}

var formation = new Formation('JAVA training', 'JAVA', '01/01/2016')

console.log("Name : ", formation.name, "\nLanguage : ", formation.language)
console.log("B : ", formation.beginDate, "\nE : ", formation.endDate)

var formation2 = new Formation()

console.log("Name : ", formation2.name, "\nLanguage : ", formation2.language)
console.log("B : ", formation2.beginDate, "\nE : ", formation2.endDate)

// ********************************** //
// Inheritance
// ********************************** //

function Person (firstName, lastName, age) {
    this.firstName = firstName || 'Karl'
    this.lastName = lastName || 'MARX'
    this.age = age || '25'
}

function Intern (firstName, lastName, knowledge) {
    Person.call(this, firstName, lastName)
    this.knowledge = knowledge || 'Know how to breathe.'
}

Intern.prototype = new Person()
//Intern.prototype.constructor = Intern // This is the default value
intern = new Intern('Hugh','GRANT','48')

console.log(intern)
console.log("He is an intern : ", intern instanceof Intern)
console.log("He is a person : ", intern instanceof Person)
