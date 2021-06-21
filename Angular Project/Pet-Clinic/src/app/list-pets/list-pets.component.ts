import { Component, OnInit } from '@angular/core';
import { Pet } from '../pets.model';
import { Router } from '@angular/router';
import { petService } from '../petService';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss'],
})
export class ListPetsComponent implements OnInit {
  title: string = 'Pet Clinic Application';

  pets: Pet[] = [];
  lastId!: number;

  constructor(private router: Router, private petService: petService) {}

  ngOnInit(): void {
    this.pets = this.petService.getAll();
    this.lastId = this.pets.length;
  }

  addNew() {
    this.router.navigate(['/pets/create/' + this.lastId]);
  }

  delete(id: number) {
    let x = this.pets.splice(id, 1);
    console.log('deleted value : ' + x);
  }

  update(id: number) {
    this.router.navigate(['/pets/update/' + id]);
  }
}
