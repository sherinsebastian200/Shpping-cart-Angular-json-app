import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  title=""
  image=""
  description=""
  price=""
  sellername=""
  quantity=""

  addProduct=()=>
  {
    let data:any={
      "title":this.title,
      "image":this.image,
      "description":this.description,
      "price":this.price,
      "sellername":this.sellername,
      "quantity":this.quantity
    }
    console.log(data)
  }



}
