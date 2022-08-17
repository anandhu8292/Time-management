import { Component, OnInit } from '@angular/core';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-amin',
  templateUrl: './amin.component.html',
  styleUrls: ['./amin.component.css']
})
export class AminComponent implements OnInit {
  show=false;

  // public searchTerm = '';

  public taskById:any;

  public taskByIdCopy:any;

  public updatedTask:any;

  public task:any;
  
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

  action(pk:number) {

    console.log(pk)

    this.service.getTaskById(pk).subscribe((response)=>{

      this.taskById = response;

      console.log(this.taskById)

      this.taskByIdCopy = {...response};

    })

  }

 

  onSubmit() {




    this.service.updateTaskById(this.taskById.T_id, this.taskById).subscribe((response)=>{

      this.updatedTask = response;

      console.log(this.updatedTask)
      this.gettasklist()

      window.alert("Task action taken successfully")

   })

   

  }

}
