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
  // lastId!: number;
  subscriber!: Subscription;


  constructor(private router: Router, private ownerService: OwnerService) {}

  ngOnInit(): void {
    // this.owners = this.ownerService.getAllOwners();
    this.subscriber = this.ownerService.getAllOwners().subscribe(data =>{
        // this.filteredEmployees = data;
         this.owners = data
      
    })
    //  this.lastId = this.owners.length
    //  console.log(this.lastId)
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe;
  }

 async  addNew() {
    // this.router.navigate(['/owners/create/'+this.lastId]);
   await this.router.navigate(['/owners/create']);

  }

  delete(id : String) {
    // let x = this.owners.splice(id,1);
    // console.log('deleted value : ' + x);
    // console.log(data);
    this.ownerService.deleteOwner(id.toString()).subscribe(() => {this.ngOnInit()});

  }

  update(id: string) {
    this.router.navigate(['/owners/update/' + id]);
  }
}
