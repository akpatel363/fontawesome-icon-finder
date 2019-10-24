import { Component, OnInit } from '@angular/core';
import { google_icons } from '../data/data2';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-material-icons',
  templateUrl: './material-icons.component.html',
  styleUrls: ['./material-icons.component.css']
})
export class MaterialIconsComponent implements OnInit {
  classes = google_icons
  constructor(private router:Router) {}
  ngOnInit() {}
  navigate(className:string){
    this.router.navigate(['mi-details',google_icons.indexOf(className)])
  }
  submit(input:HTMLInputElement){
    if(input.value!=null){
      this.filter(input.value)
    }else{
      this.classes = google_icons
    }
  }
  filter(query:string){
   this.classes = google_icons.filter((ele,index)=>{
    if(ele.includes(query)){
      return ele
    }
   }) 
  }
}
