const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ['Anakin', 'Padme']
}
const name = person.name // forma normal de se fazer
const {job, parents} = person // forma desestruturada
console.log(job, parents)

const [father, mother] = parents
console.log(father, mother)

function createUser({name, job, parents}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id, 
        name,
        job,
        parents,
    }
}

const luke = createUser(person)
console.log(luke)