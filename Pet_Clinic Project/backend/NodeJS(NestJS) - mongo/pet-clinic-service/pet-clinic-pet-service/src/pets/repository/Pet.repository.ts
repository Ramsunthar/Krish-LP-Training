import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PetCreateDto } from "../dto/PetCreate.dto";
import { PetUpdateDto } from "../dto/PetUpdate.dto";
import { Pet, PetDocument } from "../schema/Pet.schema";

export class PetRepository {
    constructor(
        @InjectModel(Pet.name) private PetModel: Model<PetDocument>,
      ) {}
    
      async create(createPetDTO: PetCreateDto): Promise<Pet> {
        let newPet = new this.PetModel(createPetDTO);
        return await newPet.save();
      }
    
      async findAll(): Promise<Pet[]> {
        return await this.PetModel.find();
      }
    
      async findById(id:string): Promise<Pet> {
        return await this.PetModel.findById(id);
      }
    
      async update(id: string, updatePetDTO: PetUpdateDto): Promise<Pet> {
        console.log(updatePetDTO);
        console.log(id);
        return await this.PetModel.findByIdAndUpdate(id, updatePetDTO);
      }
    
      async delete(id:string) : Promise<Pet> {
        return await this.PetModel.findByIdAndDelete(id);
      }
}