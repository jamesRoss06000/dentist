import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  images = [
    'https://res.cloudinary.com/doctolib/image/upload/w_1024,h_700,c_limit/kpmqp8vpcwsaxpqenjjd.jpg',
    'https://res.cloudinary.com/doctolib/image/upload/w_1024,h_700,c_limit/yy6snviwhkzcgegd2d1u.jpg',
    'https://res.cloudinary.com/doctolib/image/upload/w_1024,h_700,c_limit/z2i5trpulktpulleywgq.jpg',
    'https://res.cloudinary.com/doctolib/image/upload/w_1024,h_700,c_limit/d1kflmrebl3ryz3fsniu.jpg',
    'https://res.cloudinary.com/doctolib/image/upload/w_1024,h_700,c_limit/uwpb1wlgxan8gnfxgqfw.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
