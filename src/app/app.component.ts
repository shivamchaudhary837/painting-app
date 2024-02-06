import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SubjectService } from './subject/subject.service';
import { CartService } from './cart/cart.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AuthService } from './authentication/auth.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,OnDestroy{

  @ViewChild('app_container') appContainer: ElementRef;
  savedToggle:boolean=false;
 

  title = 'demo-painting-app';
  notificatonMessage:string= '' 
  isLoggedIn:boolean=false;

  constructor(private subjectService:SubjectService,
    private _snackBar: MatSnackBar){

  }
  
  

  ngOnInit(): void {
     
  }
  ngAfterViewInit(): void {
    this.checkSavedDarkMode();
  }
 
  ngOnDestroy(): void {
    
  }
  checkSavedDarkMode(){
        //const toggle=sessionStorage.getItem("darkMode");
        const toggle=localStorage.getItem("darkMode");
        if(toggle !== null){
           if(toggle == 'true'){
            this.savedToggle=true;
            this.enableDarkMode(true)
           }
           
        }
  }
  enableDarkMode(toggle:boolean) {
      this.applyTheme(toggle);
  }

  applyTheme(toggle:boolean){
    //console.log("dark mode",localStorage.getItem("darkMode"))
     
        if (this.appContainer && this.appContainer.nativeElement) {
          const appContainerElement: HTMLElement = this.appContainer.nativeElement;
          
          if (toggle === true) {
            appContainerElement.classList.add("dark-mode");
            
            localStorage.setItem('darkMode',toggle.toString());
          } else {
            appContainerElement.classList.remove("dark-mode");
             localStorage.clear();
          }
        } else {
          console.error('appContainer or appContainer.nativeElement is undefined.');
        }
      }
   
}
