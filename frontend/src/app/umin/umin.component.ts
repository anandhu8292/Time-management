import { Component, OnInit } from '@angular/core';
import { SecondService } from '../second.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-umin',
  templateUrl: './umin.component.html',
  styleUrls: ['./umin.component.css']
})
export class UminComponent implements OnInit {
  show=false;
  taskDetails = null as any;
  UserValue = {
'T_id':"",
'T_name':"",
'T_status' :"",
'Start_tym' :"",
'End_tym' :"",
'Create_date' :"",
'Approval_status' :"",
'Assigned_manager' :"",
'T_description' :""
}
  
  onclick(){
    this.show=!this.show

}


  constructor(private service:SecondService) { }
  searchText:any;
  tasklist:any=[];

  ngOnInit(): void {
    this.gettasklist()
  }
  gettasklist(){
    this.service.getItems().subscribe(res=>{
      this.tasklist=res
      console.log(res)
    })
  }


 deleteuser(item: any) {
  this.service.deleteuserz(item.T_id).subscribe(
 (resp) => {
  console.log(resp);
   this.gettasklist()
 },
  (err) => {
console.log(err);
 }
 );
 }

edit(item: any){
this.UserValue = item;
}

updateuser(){
this.service.updateusers(this.UserValue.T_id,this.UserValue).subscribe(
(resp) => {
console.log(resp);
this.gettasklist()
},

(err) => {
console.log(err);
}
);
}

}
