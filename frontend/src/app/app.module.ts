import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { WorkComponent } from './work/work.component';
// import { SampleService } from './sample.service';
import { CComponent } from './c/c.component';
import { AddComponent } from './add/add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SecondService } from './second.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipePipe } from './pipe.pipe';
import { UminComponent } from './umin/umin.component';
import { AminComponent } from './amin/amin.component';


@NgModule({
  declarations: [
    AppComponent,
    // WorkComponent,
    CComponent,
    AddComponent,
    LoginComponent,
    DashboardComponent,
    PipePipe,
    UminComponent,
    AminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [SecondService],
  bootstrap: [AppComponent]
})
export class AppModule { }
