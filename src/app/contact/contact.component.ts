import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gotoDoctolib(): void {
    window.open("https://www.doctolib.fr/dentiste/nice/laura-ivan", "_blank");
  }

}
