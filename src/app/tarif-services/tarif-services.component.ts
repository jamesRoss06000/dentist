import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarif-services',
  templateUrl: './tarif-services.component.html',
  styleUrls: ['./tarif-services.component.css']
})
export class TarifServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gotoDoctolib()  : void {
    window.open("https://www.doctolib.fr/dentiste/nice/laura-ivan", "_blank");
  }

}
