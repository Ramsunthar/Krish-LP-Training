import { Component, OnDestroy, OnInit } from '@angular/core';
import { Owner } from '../owners.model';
// import owners from '../data/owners.json';
import { Router } from '@angular/router';
// import { ownerService } from '../ownerService';
import { OwnerService } from '../owner.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.scss'],
})
export class ListOwnersComponent implements OnInit,OnDestroy {
  title: string = 'Pet Clinic Application';
  owners!: Owner[] ;
  subscriber!: Subscription;


  constructor(private router: Router, private ownerService: OwnerService) {}

  ngOnInit(): void {
    this.subscriber = this.ownerService.getAllOwners().subscribe(data =>{
         this.owners = data
    })
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe;
  }

  addNew() {
    this.router.navigate(['/owners/create']);

  }

  delete(id : String) {
    this.ownerService.deleteOwner(id.toString()).subscribe(() => {this.ngOnInit()});

  }

  update(id: string) {
    this.router.navigate(['/owners/update/' + id]);
  }
}
