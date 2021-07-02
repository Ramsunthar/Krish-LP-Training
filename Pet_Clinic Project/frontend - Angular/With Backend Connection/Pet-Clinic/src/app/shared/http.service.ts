
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Owner } from "../owners/owners.model";
import { Pet } from "../pets/pets.model";

@Injectable({
    providedIn: 'root'
})
export class HttpService{

    OwnerUrl: string = 'http://localhost:3000/owners'
    PetUrl: string = 'http://localhost:3000/pets'

    constructor (private http: HttpClient){}

    getAllOwners(): Observable<Owner[]> {
        return this.http.get<Owner[]>(this.OwnerUrl)
    }

    getOwnerById(id: string) : Observable<Owner> {
        return this.http.get<Owner>(`${this.OwnerUrl}/${id}`)
    }

    createOwner(data:Owner) : Observable<Owner> {
        return this.http.post<Owner>(this.OwnerUrl, data)
    }

    deleteOwner(id:string) {
        return this.http.delete(`${this.OwnerUrl}/${id}`)
    }

    updateOwner(id:string, data:Owner) : Observable<Owner> {
        return this.http.put<Owner>(`${this.OwnerUrl}/${id}`,data);
    }
/*-------------------------------------------------------------------------*/

    getAllPets(): Observable<Pet[]> {
        return this.http.get<Pet[]>(this.PetUrl)
    }

    getPetById(id: string) : Observable<Pet> {
        return this.http.get<Pet>(`${this.PetUrl}/${id}`)
    }

    createPet(data:Pet) : Observable<Pet> {
        return this.http.post<Pet>(this.PetUrl, data)
    }

    deletePet(id:string) {
        return this.http.delete(`${this.PetUrl}/${id}`)
    }

    updatePet(id:string, data:Pet) : Observable<Pet> {
        return this.http.put<Pet>(`${this.PetUrl}/${id}`,data);
    }
}