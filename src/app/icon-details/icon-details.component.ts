import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../data/data'
import { google_icons } from '../data/data2';

@Component({
  selector: 'app-icon-details',
  templateUrl: './icon-details.component.html',
  styleUrls: ['./icon-details.component.css']
})
export class IconDetailsComponent implements OnInit {
  type:string
  no:number
  className:string
  error:Number
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParamMap.subscribe((query)=>{
      query.get('type')==="fa"?this.type='fa':this.type = 'mi'
      this.no = Number.parseInt(query.get('no'))
      if(this.type=='fa'){
        if(this.no>675){
          this.error = 1
          return
        }
        this.className = data[this.no]
      }else{
        if(this.no>1057){
          this.error = 1
          return 
        }
        this.className = google_icons[this.no]
      }
    })
  }

  ngOnInit() {
  }

}
