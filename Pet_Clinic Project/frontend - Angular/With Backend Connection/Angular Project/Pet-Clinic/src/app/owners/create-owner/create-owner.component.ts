import { Component, OnInit } from '@angular/core';
// import { ownerService } from '../ownerService';
import { ActivatedRoute, Router } from '@angular/router';
import  {Owner}  from '../owners.model';
import { OwnerService } from '../owner.service';


@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss'],
})
export class CreateOwnerComponent implements OnInit {
 
  // owners! : Owner; 
  owners : Owner = new Owner();
  // id!: number;

  // ownerId!:number;
  firstName!:string;
  lastName!:string ;
  address!:string;
  phoneNumber!:number;
  


  

  constructor(private router : Router,private activatedRoute: ActivatedRoute,private ownerService: OwnerService) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params)=>this.id = params.id)
    // console.log("id "+this.id)

    // this.ownerId =Number(this.id)+ 1 ;
    // console.log("ownerId "+ this.ownerId)

    
    
  }



  add() {
    
    // this.owners.ownerId = this.ownerId;
    this.owners.firstName = this.firstName;
    this.owners.lastName = this.lastName;
    this.owners.address = this.address;
    this.owners.phoneNumber = this.phoneNumber;
    // this.ownerService.add(this.owners);
    this.ownerService.createOwner(this.owners).subscribe();
    this.router.navigate(['/owners/list'])
   
  }
}
