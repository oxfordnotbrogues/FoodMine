import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import{BehaviorSubject, Observable} from 'rxjs'
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartitem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart: Cart = this.getCartFromLocalStorage();
private CartSubject:  BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor() { }

  addToCart(food:Food):void {
    let cartItem = this.cart.items.find(item => item.food.id == food.id);
    if(cartItem) {
      return
    } else {
      this.cart.items.push(new CartItem(food));
      this.setCartToLocalStorage();
    }
  }

  removeFromCart(foodId: string):void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId:string, quantity:number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem) 
      return;
      cartItem.quantity = quantity;
      cartItem.price = quantity * cartItem.food.price;
      this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getVartObservable():Observable<Cart>{
    return this.CartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevsum, currentitem) => prevsum + currentitem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevsum, currentitem) =>prevsum + currentitem.quantity, 0 )
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJson);
    this.CartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson) : new Cart();
  }
}

