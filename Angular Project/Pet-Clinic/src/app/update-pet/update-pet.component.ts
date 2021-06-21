import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pets.model';
import { petService } from '../petService';


@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss']
})
export class UpdatePetComponent implements OnInit {

  id!: number;
  pets!: Pet;

  constructor(private router : Router,private activatedRoute: ActivatedRoute, private petService: petService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>this.id = params.id)
    console.log(this.id);
    this.pets = this.petService.get(this.id);
  }

  
  updatePet() {

    this.petService.update(this.id,this.pets);
    this.router.navigate(['/pets/list']);
}

}
