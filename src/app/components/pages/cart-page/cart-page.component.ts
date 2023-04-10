import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart! : Cart;
  constructor(private cartservice:CartService) {
    this.cartservice.getVartObservable().subscribe((cart)=> {
      this.cart = cart;
    })
  }
  ngOnInit(): void {
    
  }
  removeFromCart(cartItem: CartItem) {
    this.cartservice.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id, quantity);
  }
}
