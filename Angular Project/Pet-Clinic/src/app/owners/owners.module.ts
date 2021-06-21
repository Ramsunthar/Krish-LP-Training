import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOwnersComponent } from './list-owners/list-owners.component';
import { UpdateOwnerComponent } from './update-owner/update-owner.component';
import { CreateOwnerComponent } from './create-owner/create-owner.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListOwnersComponent,
    UpdateOwnerComponent,
    CreateOwnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: 'owners/list', component: ListOwnersComponent },

      { path: 'owners/create/:id', component: CreateOwnerComponent },
      { path: 'owners/update/:id', component: UpdateOwnerComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  exports: [ListOwnersComponent],
})
export class OwnersModule {}
