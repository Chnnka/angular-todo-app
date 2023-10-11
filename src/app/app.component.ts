import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
];

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
  //set default as ALL items
  listFilter: any = '0';



  title = 'wishlist';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  };
  
}
