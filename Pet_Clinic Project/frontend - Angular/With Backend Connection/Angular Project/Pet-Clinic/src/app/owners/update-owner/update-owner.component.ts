import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../owner.service';
import { Owner } from '../owners.model';

@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.scss'],
})
export class UpdateOwnerComponent implements OnInit {
  id!: string;

  owners!: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => (this.id = params.id));
    // console.log(this.id);
    let data = this.ownerService.getOwnerById(this.id).subscribe(data=> {
      this.owners = data;
  
    });
    
  }

  // edit(id:number) {
  //     return this.router.navigate(['/owners/update/'+id])
  // }

  async updateOwner() {
 
    // let data = {
    //   address:this.owners.address,
    //   phoneNumber: this.owners.phoneNumber
    // }
    await this.ownerService.updateOwner(this.id, this.owners).subscribe();
    await this.router.navigate(['/owners/list']);
  }
}
