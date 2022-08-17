import { Component, OnInit } from '@angular/core';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

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
    this.service.deleteuserz(item.task_id).subscribe(
    (resp) => {
    console.log(resp);
    },
    (err) => {
    console.log(err);
    }
    );
    }
  


}
