import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banners:any[] = [{
    id:1,
    img:'../../assets/banner/CityLights_cover.png',
    alt:'miki_美稀_liveinfo_citylights_banner'
  },
  {
    id:2,
    img:'../../assets/banner/おことばに甘えて.png',
    alt:'miki_美稀_liveinfo_onemanlove_banner'
  },
  {
    id:3,
    img:'../../assets/banner/ぷらそにか.png',
    alt:'miki_美稀_plusonicainfo_ぷらそにか_banner'
  },  
  {
    id:4,
    img:'../../assets/banner/美稀.png',
    alt:'miki_美稀_banner'
  }]

  liveinfo:any ={
    date:'2022/6/25 @渋谷gee-ge',
    title:'美稀 1st One Man Live おことばに甘えて',
    desc:'Twitter DMにて予約受付中！'
  }

  // videos:any[] =[{
  //   url:'https://www.youtube.com/embed/bg-8H5LiWGY',
  //   title:'春の歌/スピッツ(Cover)'
  // },{
  //   url:'https://www.youtube.com/embed/Vwr9yr86j80',
  //   title:'おまじない/美稀'
  // }]

  constructor() { }

  ngOnInit(): void {
    // console.log(this.videos[0].title);
  }

}
