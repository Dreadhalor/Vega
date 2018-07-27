import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {

  makes: any = [];
  models: any = [];
  features: any = [];
  vehicle: any = {};

  constructor(
    private vs: VehicleService
  ) { }

  ngOnInit() {
    this.vs.getMakes().subscribe(
      (res: any) => {
        this.makes = res;
      }, err => {
        console.log(err);
      }
    )
    this.vs.getFeatures().subscribe(
      (res: any) => {
        this.features = res;
      }, err => {
        console.log(err);
      }
    )
  }

  onMakeChange(){
    var selected_make = this.makes.find(match => match.id == this.vehicle.make_id);
    this.models = selected_make ? selected_make.models : [];
  }

}
