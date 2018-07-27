import { VehicleService } from './services/vehicle.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { FormsModule } from '../../node_modules/@angular/forms';

const routes: Routes = [
  { path: 'vehicles/new', component: VehicleFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
