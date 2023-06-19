import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  selectedOption: string='Select an option';
  def : string ="select a option"

  Doctors: any;
 constructor(private _employeeService:EmployeeService){}
  ngOnInit(): void {
    this._employeeService.getDoctors().subscribe(data=> this.Doctors = data);
    
}
}
