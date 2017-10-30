import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = './meet2.png'
  }

  ngOnInit() {
  }

}
