const name = "UGUR IZZET ONAL"
const number = 44062

console.log(`My name is ${name}. My student ID is ${number}`)

function getStudentFullName(){
    return name
}
function getStudentId(){
    return number
}

module.exports = {
    getStudentFullName,
    getStudentId
};
