import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
constructor(cartservice:CartService) {
  cartservice.getVartObservable().subscribe((newCart) => {
    this.cartQuantity = newCart.totalCount;
  })
}
  cartQuantity = 0;
ngOnInit(): void {
  
}
}
