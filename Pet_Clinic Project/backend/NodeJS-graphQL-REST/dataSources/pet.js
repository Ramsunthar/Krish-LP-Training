const {RESTDataSource} = require('apollo-datasource-rest')

class PetService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://localhost:3001"
    }


    getPets() {
        return this.get('/pets').then((pets) => {
            return pets;
        }).catch(error => console.log(error))
    }

    async findPetById(id) {
        return await this.get(`/pets/${id}`)
    }
}


module.exports = PetService;