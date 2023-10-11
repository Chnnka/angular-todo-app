import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find missing item'),
  ];

  filter: any;

}
