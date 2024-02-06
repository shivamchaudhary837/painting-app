import {  ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ProductErrorHandler implements ErrorHandler{
  // Implementing a global error handler allows for centralized error management 
  // throughout the application. This consistency ensures that all errors, 
  // regardless of where they occur, follow a standardized handling process

        handleError(error: any): void {
          console.error('Global Error Handler:', error);
            
        }
}
