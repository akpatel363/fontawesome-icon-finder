import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../data/data'

@Component({
  selector: 'app-icon-details',
  templateUrl: './icon-details.component.html',
  styleUrls: ['./icon-details.component.css']
})
export class IconDetailsComponent implements OnInit {
  no:number
  className:string
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((obj)=>{
      this.no = obj['params'].no
      this.className = data[this.no]
    })
  }

  ngOnInit() {
  }

}
