import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../owners.model';
import { ownerService } from '../ownerService';



@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.scss']
})
export class UpdateOwnerComponent implements OnInit {
  
  id!: number;

  owners! : Owner;




  constructor(private router : Router,private activatedRoute: ActivatedRoute,  private ownerService: ownerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>this.id = params.id)
    console.log(this.id);
    this.owners = this.ownerService.get(this.id);
  }

  // edit(id:number) {
  //     return this.router.navigate(['/owners/update/'+id])
  // }

  updateOwner() {

        this.ownerService.update(this.id,this.owners);
        this.router.navigate(['/owners/list']);
  }

}
