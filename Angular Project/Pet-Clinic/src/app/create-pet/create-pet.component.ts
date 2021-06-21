import { Component, OnInit } from '@angular/core';
import { petService } from '../petService';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pets.model';


@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  pets : Pet = new Pet();
  id! : number;

  petId!: number;
  petName!: string;
  furColor!: string;

  constructor(private router : Router,private activatedRoute: ActivatedRoute,private petService: petService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>this.id = params.id)
    console.log("id "+this.id)

    this.petId =Number(this.id)+ 1 ;
    console.log("ownerId "+ this.petId)
  }

  add() {
    
    this.pets.petId = this.petId;
    this.pets.petName = this.petName;
    this.pets.furColor = this.furColor;
    this.petService.add(this.pets);
    this.router.navigate(['/pets/list'])


   
  }

}

