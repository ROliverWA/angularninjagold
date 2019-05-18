import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { TextboxComponent } from './textbox/textbox.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
