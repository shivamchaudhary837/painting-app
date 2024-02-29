import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
      myForm:FormGroup;
      //  Represents a collection of form controls and their states. 
      // It's created using FormBuilder.group.
       constructor(private fb:FormBuilder){

       }

       ngOnInit(): void {
          this.intitalizeForm();
          this.loadFormData();
          this.subscribeToFormChanges()
       }
       loadFormData() {
          // Load form data from sessionStorage
          const storedData=sessionStorage.getItem("formData");
          if(storedData !== null){
          const formData =JSON.parse(storedData);
           
          if (formData !== null) {
               this.myForm.patchValue(formData);
             }
          }
          
        }
      
       intitalizeForm(){
            this.myForm=this.fb.group({
                 firstName:['',[Validators.required,Validators.minLength(5),this.noSpaceValidator()]],
                 lastName:['',[Validators.required,Validators.minLength(5)]],
                 email:['',[Validators.required,Validators.email]]
            })
       }


       //Custom Validator for no space between words
       noSpaceValidator():ValidatorFn{
          
        return (control: AbstractControl): { [key: string]: any } | null => {
               const isValid=(control.value || '').trim().indexOf(' ') === -1;
               return isValid?null:{noSpaceError:true};  
            }
       }
       subscribeToFormChanges() {
          // Subscribe to value changes in the form controls
          this.myForm.valueChanges.subscribe(value => {
            try {
              // Save form data to sessionStorage each time the form changes
              sessionStorage.setItem('formData', JSON.stringify(value));
            } catch (err) {
              console.log('Error saving form data to sessionStorage:', err);
            }
          });
        }
       onSubmit(){
               try{
               console.log('Form submitted:', this.myForm.value);
               console.log("email **",this.myForm.value.email);
               sessionStorage.setItem('formData', JSON.stringify(this.myForm.value));
               }
               catch(err){
                    console.log("Something went wrong",err)
               }
       }

       
}
