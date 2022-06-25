import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('nav', {static:true}) nav:ElementRef<HTMLDivElement>;
  @ViewChild('ham', {static:true}) ham:ElementRef<HTMLDivElement>;
  constructor() { }

  ngOnInit(): void {
    this.ham.nativeElement.addEventListener('click',()=>{
      this.ham.nativeElement.classList.toggle('active');
      this.nav.nativeElement.classList.toggle('active');
    })
  }

}
