import { SharedService } from '../shared.service';
import { Component, OnInit } from '@angular/core';
class Anime {
  id?: number;
  name?: string;
  scope?: number;
  img?: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  anime: Anime = new Anime();

  constructor(public _shared: SharedService) {}
  ngOnInit() {}

  AddAnmine() {
    this._shared.CreateNewAnime(this.anime).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
