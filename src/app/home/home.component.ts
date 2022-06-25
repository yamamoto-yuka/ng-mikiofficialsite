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

  constructor() { }

  ngOnInit(): void {
    console.log(this.banners[0].img);
  }

}
