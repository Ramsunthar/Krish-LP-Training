import { Component, OnInit } from '@angular/core';
import { Owner } from '../owners.model';
// import owners from '../data/owners.json';
import { Router } from '@angular/router';
import { ownerService } from '../ownerService';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.scss'],
})
export class ListOwnersComponent implements OnInit {
  title: string = 'Pet Clinic Application';
  owners: Owner[] = [];
  lastId!: number;

  constructor(private router: Router, private ownerService: ownerService) {}

  ngOnInit(): void {
    this.owners = this.ownerService.getAll();
     this.lastId = this.owners.length
    //  console.log(this.lastId)
  }

  addNew() {
    this.router.navigate(['/owners/create/'+this.lastId]);
  }

  delete(id: number) {
    let x = this.owners.splice(id,1);
    console.log('deleted value : ' + x);
  }

  update(id: number) {
    this.router.navigate(['/owners/update/' + id]);
  }
}
