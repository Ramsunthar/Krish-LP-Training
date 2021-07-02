import { Component, OnInit } from '@angular/core';
// import { petService } from '../petService';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pets.model';
import { PetService } from '../pet.service';


@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  pets : Pet = new Pet();
  petName!: string;
  furColor!: string;

  constructor(private router : Router,private activatedRoute: ActivatedRoute,private petService: PetService) { }

  ngOnInit(): void {
  }

  add() {
    
    this.pets.petName = this.petName;
    this.pets.furColor = this.furColor;
    this.petService.createPet(this.pets).subscribe();
    this.router.navigate(['/pets/list'])   
  }

}

