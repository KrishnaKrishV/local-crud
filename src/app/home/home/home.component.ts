import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rows: any = [];
  constructor(private router: Router) {
    this.rows = JSON.parse(localStorage.getItem('data'));
    console.log(this.rows);
  }

  ngOnInit() {
  }

  onEdit(id) {
    this.router.navigate([`/add/${id}`]);
  }

  onDelete(id) {
    this.rows.splice(id, 1);
  }

}
