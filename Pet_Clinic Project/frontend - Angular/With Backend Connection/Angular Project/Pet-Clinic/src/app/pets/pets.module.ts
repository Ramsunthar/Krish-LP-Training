import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CreatePetComponent,
    ListPetsComponent,
    UpdatePetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: 'pets/list', component: ListPetsComponent },

      { path: 'pets/create', component: CreatePetComponent },
      { path: 'pets/update/:id', component: UpdatePetComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
    
  ],
  exports: [ListPetsComponent],
})
export class PetsModule { }
