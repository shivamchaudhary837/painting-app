import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

      // to use FormControl ,add ReaactiveFormModule in module file
     productName:FormControl=new FormControl();
     constructor(){

     }

     onSubmit(data: NgForm) {
         console.log("data ",data.value);

        //  use data.resetForm(), to reset data
     }
}
