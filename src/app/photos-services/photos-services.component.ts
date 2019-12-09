import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-services',
  templateUrl: './photos-services.component.html',
  styleUrls: ['./photos-services.component.css']
})
export class PhotosServicesComponent implements OnInit {
  images = [
    "../assets/serviceImage1.PNG",
    "../assets/serviceImage2.PNG",
    "../assets/serviceImage3.PNG",
    "../assets/serviceImage4.PNG"
  ];

  constructor() { }

  ngOnInit() {
  }

}
