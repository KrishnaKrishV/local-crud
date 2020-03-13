import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: 'add',
    component: AddComponent
  }
  ];

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddModule { }
