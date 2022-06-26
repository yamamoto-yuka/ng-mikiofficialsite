import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactBg:string = '../../assets/footer/contact_bg.png';

  constructor() { }

  ngOnInit(): void {
  }

}
