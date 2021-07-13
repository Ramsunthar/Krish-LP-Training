const {RESTDataSource} = require('apollo-datasource-rest')

class OwnerService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://localhost:3000"
    }


    async getOwners() {
        return this.get('/owners').then((owners) => {
            return owners;
        }).catch(error => console.log(error))
    }
    

    async findOwnerById(id) {
        return await this.get(`/owners/${id}`)
    }
}


module.exports = OwnerService;