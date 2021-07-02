import petsFile from "./data/pets.json"
import { Pet } from "./pets.model"
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class petService {

    pets:Pet[] = petsFile;
    
    getAll() {
        return this.pets;
    }

    get(id:number) {
        return this.pets[id];
    }

    update(id: number,pet:Pet) {
        this.pets[id]=pet;
    }

    add(pet:Pet) {
        this.pets.push(pet);
    }


}