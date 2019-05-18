import { HttpService } from './http.service';
import { Component } from '@angular/core';

import { CodeNode } from 'source-list-map';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  code: string=""
  valid: boolean = false;
  constructor(private _httpService: HttpService) {} 
  
  
  
  
  clicked (button, event) {   
    console.log(event);
  if (!this.valid) {
    if (button === "<") {
        if (this.code.length > 0) {      
          this.code = this.code.slice(0,this.code.length-1);
        }
        
      }
    else if (button !== ">") {
      this.code += button;
    } 
    if (this.code.length === 4) {
      this.valid = true; }
    else {
      this.valid = false;
        }
      }
    
  else {
    if (button === "<") {
      if (this.code.length > 0) {      
          this.code = this.code.slice(0,this.code.length-1);
          this.valid = false;
      }
    }
    else if (button ==='>') {        
        let ninja = this._httpService.logNinja(this.code);
        ninja.subscribe(user => {
          console.log(user['isValid']);
          console.log(user)
          alert("welcome " + user['result']['users'][0]['name']);
          
          
          
          
          
          
          
          )
        
      }
    }
  
}
  }

      
    

