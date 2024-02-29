import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
     isActive:boolean=false

     onClick(){
        this.isActive= !this.isActive
     }
}
