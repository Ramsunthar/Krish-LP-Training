import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Pet } from './pets.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpService: HttpService) {}

  getAllPets(): Observable<Pet[]> {
    return this.httpService.getAllPets();
  }

  getPetById(id: string): Observable<Pet> {
    return this.httpService.getPetById(id);
  }

  createPet(data: Pet): Observable<Pet> {
    return this.httpService.createPet(data);
  }

  deletePet(id: string) {
    return this.httpService.deletePet(id);
  }
  updatePet(id:string, data: any) : Observable<Pet> {
    return this.httpService.updatePet(id,data);
  }
}
