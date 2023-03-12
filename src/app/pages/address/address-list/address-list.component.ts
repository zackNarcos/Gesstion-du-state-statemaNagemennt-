import {Component, OnInit} from '@angular/core';
import {NotiflixService} from "../../../shareds/services/notiflix.service";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

  constructor(private notiflixService : NotiflixService) { }

  ngOnInit() {
    this.notiflixService.info('je suis un message de texte')
  }


}
