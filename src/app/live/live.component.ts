import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  liveBg:string =  '../../assets/footer/live_bg.png';

  constructor() { }

  ngOnInit(): void {
  }

}
