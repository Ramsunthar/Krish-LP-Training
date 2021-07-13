const OwnerService = require("./dataSources/owner");
const { ApolloServer, gql } = require("apollo-server");
const PetService = require("./dataSources/pet");

const typeDefs = gql`
  type Query {
    owners(
      _id: ID
      firstName: String
      lastName: String
      address: String
      phoneNumber: Int
    ): [Owner]
    pets(
        _id: ID
        petName: String
        furColor: String
    ) : [Pet]
    findOwnerById(id:ID) : Owner
    findPetById(id:ID) : Pet
  }
  

  type Owner {
    _id: ID!
    firstName: String
    lastName: String
    address: String
    phoneNumber: Int
  }
  type Pet {
    _id: ID!
        petName: String
        furColor: String
  }

`;

const dataSources = () => ({
  ownerService: new OwnerService(),
  petService: new PetService()

});

const resolvers = {
  Query: {
    owners: (parent, args, { dataSources }, info) => {
      return dataSources.ownerService.getOwners();
    },
    pets : (parent, args, {dataSources}, info) => {
        return dataSources.petService.getPets();
    },
    findOwnerById : (parent, {id} ,{dataSources}, info) => {
        return dataSources.ownerService.findOwnerById(id);
    },
    findPetById : (parent, {id}, {dataSources}, info) => {
        return dataSources.petService.findPetById(id);
    }

  },
};

const gpqlServer = new ApolloServer({ typeDefs, resolvers, dataSources });

gpqlServer
  .listen({ port: process.env.port || 4000 })
  .then(({ url }) => console.log(`graphql server started  on ${url}`));
