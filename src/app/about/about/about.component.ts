import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {filter} from 'rxjs/operators'
import { CartService } from 'src/app/cart/cart.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnDestroy{
   private mySubscription:Subscription;
   
  constructor(private http:HttpClient,private cartService:CartService){}
  ngOnDestroy(): void {
   this.mySubscription.unsubscribe();
  }

  ngOnInit(): void {
    
       //promise is part of javascript
       //promise are eager that means called as soon as we define it
       // but observable called when some component subscribe it

         // promise return single value but observable return multiple value
         // we can unsubscribe observable but not to Promise


      //  const promise=new Promise(resolve => {
      //         setTimeout(()=>{
      //             resolve("Promise Working")
      //             resolve("Promise Working")
      //         },1000)
      //  })
      //  //for consuming
      //  promise.then( (result) => console.log("Promise log",result))
      //  //use observable from rxjs
      //  const observable=new Observable(sub => {
      //       setTimeout(() =>{
      //            sub.next('Observable working') 
      //            sub.next('Observable working1') 
      //       },1000)
      //  })

      //  observable
      //  .pipe(
      //   filter(d => d === 'Observable working1'),
      //   )
      //   .subscribe(result => console.log("Observable log",result))


      //    const obs1=new Observable(sub => {
      //       console.log("Obs1 *****")
      //       let counter=0;
      //       setInterval(()=>{
      //         sub.next(counter+1) 
      //       },1000)
      //    })

      //  this.mySubscription=  obs1.subscribe(res => console.log("Subsriber count "+res));

  }

  sendRequest(){
     this.cartService
     console.log("request send");
     let data="shivam chaudhary"
     this.cartService.checkout(data);
  }
}
