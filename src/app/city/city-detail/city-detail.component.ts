import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City } from 'src/app/models/city';
import { Photo } from 'src/app/models/photo';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers:[CityService]
})
export class CityDetailComponent implements OnInit {
  
  constructor(private activatedRoute:ActivatedRoute, private cityService:CityService) {
   
   }
  city:City;


  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getCityById(params["cityId"])

    })
  }

  getCityById(cityId:number){
    this.cityService.getCityById(cityId).subscribe(data=>{
      this.city=data;
    })

  }
  

  }
  
  
  


