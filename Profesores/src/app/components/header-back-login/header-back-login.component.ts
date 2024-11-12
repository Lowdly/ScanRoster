import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-back-login',
  templateUrl: './header-back-login.component.html',
  styleUrls: ['./header-back-login.component.scss'],
})
export class HeaderBackLoginComponent implements OnInit {
  @Input() titulo:string; 
  constructor() { }

  ngOnInit() {}

}
