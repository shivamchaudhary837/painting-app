import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { AuthInterceptorInterceptor } from './interceptor/auth-interceptor.interceptor';
import { LogInterceptor } from './interceptor/log.interceptor';
import { WrongPathComponent } from './wrong-path/wrong-path.component';
import { AboutModule } from './about/about.module';
import { DeactivateGuard } from './guard/deactivate.guard';
import { SubjectComponent } from './subject/subject.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { DemoPipe } from './custom-pipe/demo-pipe';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CookieService } from 'ngx-cookie-service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    WrongPathComponent,
    SubjectComponent,
    UserLoginComponent,
    UserRegisterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    ProductModule,
    CartModule,
    AboutModule,
    FormsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([])
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LogInterceptor,
    //   multi: true
    // }
    // ,
    DeactivateGuard,
    CookieService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {
           
}
