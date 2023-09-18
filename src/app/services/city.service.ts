import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city'
import { Photo } from '../models/photo';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify-service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  

  constructor(private httoClient: HttpClient,
    private alertifyService:AlertifyService,
    private router:Router) { }

  path = "https://localhost:44320/api/";

  getCities(): Observable<City[]> {
    return this.httoClient.get<City[]>(this.path + "cities");

  }
  getCityById(cityId:number):Observable<City>{
    return this.httoClient.get<City>(this.path+"cities/detail/?id="+cityId)
  }

  getPhotosByCity(cityId:number):Observable<Photo[]>{
    return this.httoClient.get<Photo[]>(this.path + "cities/photos/?cityId=" + cityId)


  }

  

  add(city: any) {
    this.httoClient.post(this.path + 'cities/add', city).subscribe((data: any) => {
      this.alertifyService.success("Şehir başarıyla eklendi: ");
      this.router.navigateByUrl('/cityDetail/' + data.id)
    });
  }
  
  

}
