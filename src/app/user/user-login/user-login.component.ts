import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

        username:string=''
        password:string=''

        cookieValue:string|null=null;

         constructor(private authService:AuthService
          ,private route:Router,private cookieService:CookieService){
              
         }

         loginCheck(){
              
          console.log("username ",this.username)
          console.log("password ",this.password)
          this.authService.logInUser(this.username,this.password);
          
          this.authService.isAuthorizedUser().subscribe({
              
              next: (response:boolean) => {
                  if(response === true){
                    localStorage.setItem("user","true");
                   
                    this.route.navigate(['/product']);
                    
                  }
                   else
                    window.alert("Wrong Username/Password,Try Again");
              },
               error: (e) =>{
                console.error(e)
              }
            })
         }

         onSubmit() {
          this.loginCheck()

          this.setCookie()
          // this.getCookie()
         }

      getToken(){
          
      }

      setCookie() {
        const cookieName = 'user';
        const cookieValue = 'John Doe';
        const expirationSeconds = 30;
         
         // Calculate expiration time in milliseconds
          const expirationTime = new Date();
          expirationTime.setSeconds(expirationTime.getSeconds() + expirationSeconds)
          
          
         this.cookieService.set(cookieName,cookieValue,expirationTime);
         console.log('Cookie set:', this.cookieService.get(cookieName));
      }

      getCookie() {
        const cookieName = 'user';
        this.cookieValue = this.cookieService.get(cookieName);
        console.log('Cookie retrieved:', this.cookieValue);
      }
         
      deleteCookie() {
        const cookieName = 'user';
        this.cookieService.delete(cookieName);
        console.log('Cookie deleted');
        this.cookieValue = null;
      }
}
