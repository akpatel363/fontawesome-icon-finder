import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  classes = data;
  searchForm:FormGroup
  constructor(private router:Router) {}
  ngOnInit() {
  }
  submit(ele:HTMLInputElement){
    if(ele.value!=null){
      this.filter(ele.value.toLowerCase())
    }else{
      this.classes = data
    }
  }
  navigate(className:string){
    this.router.navigate(['/details',data.indexOf(className)])
  }
  filter(query:string){
    this.classes = data.filter((value,index)=>{
      if(value.includes(query)){
        return value
      }
    })
  }
}
