import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  onsubmit(item:any){
    console.log(item)
    if(item.name=="user" && item.password=='user1'){
      console.log(this.router);
      this.router.navigate(['umin']);
    }
    else if(item.name=="manager" && item.password=='manager1'){
        console.log(this.router);
        this.router.navigate(['amin']);
      }
    else{
      window.alert("username or password does not match")
    }
  }

}
