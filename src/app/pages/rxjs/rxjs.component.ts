import { Component, OnDestroy } from '@angular/core';
import { Observable , interval, Subscription} from 'rxjs';
import {retry, take , map , filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public suscription : Subscription;

  constructor() { 

  this.suscription  = this.retornaObservable().subscribe(valor=> console.log(valor))
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  retornaObservable() : Observable<Number>{

    return interval(50).
           pipe(take(200),
                map(valor =>{ return valor +1}),
                filter(valor => (valor % 2 === 0) ? true : false )
          );}




}
