import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-services',
  templateUrl: './photos-services.component.html',
  styleUrls: ['./photos-services.component.css']
})
export class PhotosServicesComponent implements OnInit {
  images = [
    "../assets/images/serviceImage1.PNG",
    "../assets/images/serviceImage2.PNG",
    "../assets/images/serviceImage3.PNG",
    "../assets/images/serviceImage4.PNG"
  ];

  constructor() { }

  ngOnInit() {
  }

}
