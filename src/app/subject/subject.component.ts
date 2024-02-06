import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { SubjectService } from './subject.service';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{

  constructor(private subjectService:SubjectService){

  }
  submitData(data:HTMLInputElement) {
        console.log("data check ",data.value)
        this.subjectService.sendNotification(data.value)
  }
  ngOnInit(): void {
      //this.observableLearn();

      //this.subjectLearn()
      this.consumeUsingSubject()
  }
  consumeUsingSubject() {
    const subject=new Subject()
    const data=ajax('https://jsonplaceholder.typicode.com/users')

          // data.subscribe(d => console.log(d));
          // data.subscribe(d => console.log(d));

          //above code using observable ,without subject
          // call same api two times for same data due to more than one subcriber
          // to resolve this issue so that we call api only once and consume by several subscriber
          //we use subject
          
          const result=data.subscribe(subject)

          subject.subscribe(d => console.log(d));
          subject.subscribe(d => console.log(d));

  }
    
  subjectLearn(){
        // subject are multicast
       const subject=new Subject();

        //subscriber1
    subject.subscribe(d => console.log("s1 ",d))

    //subscriber 2
    subject.subscribe(d => console.log("s2 ",d))

    subject.next(Math.random());

    // conclusion : for each subcriber ,we get same behaviour
    //here ,subject is used as data provider, but it can also used as data consumer

      
  }

  observableLearn(){
          //  obervable are unicast
    const obervable=new Observable(obj => obj.next(Math.random()))

    //subscriber1
    obervable.subscribe(d => console.log("s1 ",d))

    //subscriber 2
    obervable.subscribe(d => console.log("s2 ",d))

    // conclusion : for each Subscriber,new observable is called due to which we get different behaviour
          
    }
}
