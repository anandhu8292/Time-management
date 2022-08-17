import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SecondService } from '../second.service'; 
import { addModel } from './add.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formValue ! : FormGroup <any>
  addObj:addModel= new addModel;

  constructor(private api: SecondService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      T_name :[''],
      T_id :[''],
      T_status :[''],
      Start_tym :[''],
      End_tym:[''],
      Create_date:[''],
      Approval_status :[''],
      Assigned_manager:[''],
      T_description :[''],


    })
    
  }

  add(){
    this.addObj.T_name = this.formValue.value.T_name;
    this.addObj.T_id = this.formValue.value.T_id;
    this.addObj.T_status = this.formValue.value.T_status;
    this.addObj.Start_tym  = this.formValue.value.Start_tym ;
    this.addObj.End_tym  = this.formValue.value.End_tym ;
    this.addObj.Create_date = this.formValue.value.Create_date ;
    this.addObj.Approval_status = this.formValue.value.Approval_status ;
    this.addObj.Assigned_manager  = this.formValue.value.Assigned_manager;
    this.addObj.T_description  = this.formValue.value.T_description;
    this.api.postData(this.addObj).subscribe({next: (p) => {
      console.log(p)
    },
    error: (e) => {
      console.log(e)
      alert("error")
    },
    complete: () => {
      console.log("record added")
      alert("record added")
    
      
    }
  })

  }
}
