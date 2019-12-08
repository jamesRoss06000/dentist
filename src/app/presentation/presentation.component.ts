import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gotoDoctolib()  : void {
    window.open("https://www.doctolib.fr/dentiste/nice/laura-ivan", "_blank");
  }

}
