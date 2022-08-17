import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { map } from 'rxjs'
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  private apiRoot = 'http://127.0.0.1:8000/'
  private url = 'http://127.0.0.1:8000/work/';
  
  constructor(private http: HttpClient) { }
  
  

    getItems(){
      return this.http.get<any>(this.apiRoot.concat('work/')).pipe(
        map(
          (res =>{
            return res;
          })
        )
      )
    }

   postData(data:any){
    return this.http.post<any>(this.apiRoot.concat('work/'), data).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

 public deleteuserz(T_id: any) {
return this.http.delete(this.apiRoot.concat('work/') + T_id);
}

public updateusers(T_id: any,item: any) {
  // return this.http.put(this.apiRoot.concat('work/') + T_id,item);
  return this.http.put(this.apiRoot + 'work/' + T_id+"/",item );
}


getTaskById(pk:number) {

  return this.http.get(this.url + pk)

}

updateTaskById(pk:number,data:object) {

  return this.http.put(this.url + pk+"/", data)

}

}

