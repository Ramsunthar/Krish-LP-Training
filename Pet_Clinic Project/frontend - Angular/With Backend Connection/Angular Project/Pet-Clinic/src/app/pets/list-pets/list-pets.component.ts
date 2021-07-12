import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pet } from '../pets.model';
import { Router } from '@angular/router';
import { petService } from '../petService';
import { Subscription } from 'rxjs';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss'],
})
export class ListPetsComponent implements OnInit, OnDestroy {
  title: string = 'Pet Clinic Application';

  pets!: Pet[] ;
  // lastId!: number;
  subscriber!: Subscription;

  constructor(private router: Router, private petService: PetService) {}

  ngOnInit(): void {
    // this.pets = this.petService.getAll();
    // this.lastId = this.pets.length;
    this.subscriber = this.petService.getAllPets().subscribe(data => {
      this.pets = data;
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe;
  }

  addNew() {
    this.router.navigate(['/pets/create/']);
  }

  delete(id: string) {
    // let x = this.pets.splice(id, 1);
    // console.log('deleted value : ' + x);
    this.petService.deletePet(id.toString()).subscribe(() => {this.ngOnInit()});

  }

  update(id: string) {
    this.router.navigate(['/pets/update/' + id]);
  }
}
