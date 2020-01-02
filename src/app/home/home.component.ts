import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
   


  constructor() { }
  
  X = 'RANDOM DATA';

  fnclick() {

    this.X=this.X+'new';

  }

  ngOnInit() {
  }

}
