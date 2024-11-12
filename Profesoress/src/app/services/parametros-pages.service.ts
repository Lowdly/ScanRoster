import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametrosPagesService {

  private objetoMandar=new BehaviorSubject<{}>({});
  // eslint-disable-next-line @typescript-eslint/member-ordering
  $getObjeto = this.objetoMandar.asObservable();
  constructor() { }


  sendObjeto(data: any){
    this.objetoMandar.next(data);
  }

}
