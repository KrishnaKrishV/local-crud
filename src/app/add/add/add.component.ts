import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  rows: any = this.getData();
  getIndex: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let data: any = localStorage.getItem('data');
    data = data ? JSON.parse(data) : [];
    this.getIndex = this.route.snapshot.paramMap.get('id');
    const value = data.splice(this.getIndex, 1);
    if (value.length === 0) {
      return this.addFormData({});
    }
    this.addFormData(value[0]);
  }
  get addFormcontrols() { return this.addForm.controls; }

  addFormData(data) {
    this.addForm = this.fb.group({
      name: [data.name || '', Validators.required],
      age: [data.age || '', Validators.required]
    });
  }


  private getData() {
    let data: any = localStorage.getItem('data');
    data = data ? JSON.parse(data) : [];

    return data;
  }

  private generateId() {
    const id = Math.random().toString(36).substr(2, 9);
    return id;
  }

  onSubmit() {
    const { value: data } = this.addForm;
    data.id = this.generateId();
    if (!this.getIndex) {
    this.rows.push(data);
    localStorage.setItem('data', JSON.stringify(this.rows));
    return this.router.navigate(['/home']);
    }
    this.rows.splice(this.getIndex, 1, data);
    localStorage.setItem('data', JSON.stringify(this.rows));
    this.router.navigate(['/home']);
  }

}
