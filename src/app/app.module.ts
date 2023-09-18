import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{FileUploadModule} from 'ng2-file-upload'




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import{CityAddComponent} from "./city/city-add/city-add.component";
import { AlertifyService } from './services/alertify-service';
import { RegisterComponent } from './register/register.component';
import { PhotoComponent } from './photo/photo.component';



@NgModule({
  declarations: [					
    AppComponent,
      ValueComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent,
      CityAddComponent,
      RegisterComponent,
      PhotoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule
    



  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
