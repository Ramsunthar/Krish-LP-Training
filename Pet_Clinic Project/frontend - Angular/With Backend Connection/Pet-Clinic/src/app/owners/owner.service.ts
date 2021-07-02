import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Owner } from './owners.model';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  constructor(private httpService: HttpService) {}

  getAllOwners(): Observable<Owner[]> {
    return this.httpService.getAllOwners();
  }

  getOwnerById(id: string): Observable<Owner> {
    return this.httpService.getOwnerById(id);
  }

  createOwner(data: Owner): Observable<Owner> {
    return this.httpService.createOwner(data);
  }

  deleteOwner(id: string) {
    return this.httpService.deleteOwner(id);
  }
  updateOwner(id:string, data: any) : Observable<Owner> {
    return this.httpService.updateOwner(id,data);
  }
}
