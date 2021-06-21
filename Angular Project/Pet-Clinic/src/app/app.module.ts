import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { OwnersModule } from './owners/owners.module';
import { RouterModule } from '@angular/router';

import { ListOwnersComponent } from './owners/list-owners/list-owners.component';
import { HomeComponent } from './home/home.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePetComponent,
    ListPetsComponent,
    UpdatePetComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwnersModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'owners/list', component: ListOwnersComponent},
      {path: 'pets/list', component: ListPetsComponent},

      { path: 'pets/create/:id', component: CreatePetComponent },
      { path: 'pets/update/:id', component: UpdatePetComponent },
      {path: 'home' , component : HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}


    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
