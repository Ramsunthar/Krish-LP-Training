import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';
import { Pet } from '../pets.model';
// import { petService } from '../petService';


@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss']
})
export class UpdatePetComponent implements OnInit {

  id!: string;
  pets!: Pet;

  constructor(private router : Router,private activatedRoute: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>this.id = params.id)
    console.log(this.id);
    let data = this.petService.getPetById(this.id).subscribe(data=> {
      this.pets = data;
  })
}

  
  updatePet() {

    this.petService.updatePet(this.id,this.pets).subscribe();
  
    this.router.navigate(['/pets/list']);
}

}
