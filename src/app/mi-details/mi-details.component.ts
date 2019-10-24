import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { google_icons } from '../data/data2';

@Component({
  selector: 'app-mi-details',
  templateUrl: './mi-details.component.html',
  styleUrls: ['./mi-details.component.css']
})
export class MiDetailsComponent implements OnInit {
  no:number
  className:string
  constructor(private activatedRoute:ActivatedRoute) {
    activatedRoute.paramMap.subscribe((params)=>{
      this.no = params['params'].no
      this.className = google_icons[this.no]
    })  
  }

  ngOnInit() {}
}
