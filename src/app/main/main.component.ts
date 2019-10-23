import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, animateChild, group, stagger } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  classes = data;
  searchForm:FormGroup
  constructor(private fb:FormBuilder,private router:Router) {
    console.log(data.length)
    this.searchForm = this.fb.group({
      'query':[null,Validators.required]
    })
  }

  ngOnInit() {
  }
  submit(){
    if(this.searchForm.valid){
      this.filter(this.searchForm.value.query.toLowerCase())
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
