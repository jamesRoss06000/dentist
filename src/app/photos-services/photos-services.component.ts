import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-services',
  templateUrl: './photos-services.component.html',
  styleUrls: ['./photos-services.component.css']
})
export class PhotosServicesComponent implements OnInit {
  images = [
    "https://t3.ftcdn.net/jpg/02/71/93/20/240_F_271932019_InfjqmaRZGYTxKlNyiQ2euQNxFxF66ZE.jpg",
    "https://t4.ftcdn.net/jpg/02/25/38/47/240_F_225384784_trfyR8ZHktps97Qlpl3kNHxwm7vHKXP3.jpg",
    "https://t3.ftcdn.net/jpg/00/60/67/04/240_F_60670427_OI4A9TTw9Db716AjRd76DpMWWiguCDdQ.jpg",
    "https://t4.ftcdn.net/jpg/00/58/91/13/240_F_58911325_KbByqxAlpwjNKanuOcy6HLUcQOIbVcgg.jpg"
  ];

  constructor() { }

  ngOnInit() {
  }

}
