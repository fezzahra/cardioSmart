import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feature-slider',
  templateUrl: './feature-slider.component.html',
  styleUrls: ['./feature-slider.component.css']
})
export class FeatureSliderComponent implements OnInit {

  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
 /*passerTest(){
    this.router.navigate(['/questionnaire'],{relativeTo:this.route});
  }*/
}
