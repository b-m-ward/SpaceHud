import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  testIds = [];
  constructor(private route : ActivatedRoute) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe(params => {
      this.testIds.push(params.get('id'));
    })
  }

}
