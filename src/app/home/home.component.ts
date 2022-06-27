import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banners:any[] = [{
    id:1,
    img:'../../assets/banner/CityLights_cover.png',
    alt:'miki_美稀_liveinfo_citylights_banner',
    url:'#'
  },
  {
    id:2,
    img:'../../assets/banner/おことばに甘えて.png',
    alt:'miki_美稀_liveinfo_onemanlove_banner',
    url:'#'
  },
  {
    id:3,
    img:'../../assets/banner/ぷらそにか.png',
    alt:'miki_美稀_plusonicainfo_ぷらそにか_banner',
    url:'https://www.youtube.com/watch?v=0ddDlc4fpI4'
  },  
  {
    id:4,
    img:'../../assets/banner/美稀.png',
    alt:'miki_美稀_banner',
    url:'#'
  }]

  liveinfo:any ={
    date:'2022/6/25 @渋谷gee-ge',
    title:'美稀 1st One Man Live おことばに甘えて',
    desc:'無事終了しました！ありがとう！',
    link:'過去公演情報をみる'
  }

  // videos:any[] =[{
  //   url:'https://www.youtube.com/embed/bg-8H5LiWGY',
  //   title:'春の歌/スピッツ(Cover)'
  // },{
  //   url:'https://www.youtube.com/embed/Vwr9yr86j80',
  //   title:'おまじない/美稀'
  // }]

  @ViewChild('container', {static:true}) container:ElementRef<HTMLElement>;
  @ViewChild('live', {static:true}) live:ElementRef<HTMLDivElement>;
  @ViewChild('videoHeadline', {static:true}) videoHeadline:ElementRef<HTMLDivElement>;
  @ViewChild('firstVideo', {static:true}) firstVideo:ElementRef<HTMLDivElement>;
  @ViewChild('secondVideo', {static:true}) secondVideo:ElementRef<HTMLDivElement>;

  constructor() { }

 animation(){
    const tl = gsap.timeline();
  
      tl.fromTo(
        this.live.nativeElement,
        2,
        {x: -400},
        {x: 0, ease:Power2.easeInOut}
        )
        .fromTo(
          this.videoHeadline.nativeElement,
          2,
          {x:-400},
          {x:0, ease:Power2.easeInOut},
          '-=1'
        )
        .fromTo(
          this.firstVideo.nativeElement,
          2,
          {x: -500},
          {x: 0, ease:Power2.easeInOut},
          '-=2')
          .fromTo(
            this.secondVideo.nativeElement,
            2,
            {x: 500},
            {x: 0, ease:Power2.easeInOut},
            '-=2'
            )
  }

  ngOnInit(): void {
    // console.log(this.videos[0].title);
    this.animation();
  }

}
