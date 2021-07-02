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
    let data = this.ownerService.getOwnerById(this.id).subscribe(data=> {
      this.owners = data;
  
    });
  }

  updateOwner() {
    this.ownerService.updateOwner(this.id, this.owners).subscribe();
    this.router.navigate(['/owners/list']);
  }
}
