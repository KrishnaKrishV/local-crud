import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchComponent } from './fetch/fetch.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'home/edit',
      component: EditComponent
    },
    {
      path: 'home/fetch',
      component: FetchComponent
    }
  ];

@NgModule({
  declarations: [HomeComponent, EditComponent, DeleteComponent, FetchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class HomeModule { }
