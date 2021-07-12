import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PetsModule } from './pets/pets.module';
import { OwnersModule } from './owners/owners.module';
import { RouterModule } from '@angular/router';
import { ListPetsComponent } from './pets/list-pets/list-pets.component';
import { ListOwnersComponent } from './owners/list-owners/list-owners.component';
import { HomeComponent } from './home/home.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwnersModule,
    PetsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'pets/list', component: ListPetsComponent },

      {path:'owners/list', component: ListOwnersComponent},
      {path:'pets/list', component: ListOwnersComponent},
      {path:'home', component: HomeComponent},

      {path: '', redirectTo: 'home', pathMatch: 'full'}


    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
