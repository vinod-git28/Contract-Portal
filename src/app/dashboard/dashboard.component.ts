import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

 isExpanded = false;
  element: HTMLElement;

  toggleActive(event:any){
    event.preventDefault();
    if(this.element !== undefined){
      this.element.style.backgroundColor = "white";
    } 
    var target = event.currentTarget;
    target.style.backgroundColor = "#e51282";
    this.element = target;
  }

  lists = [
  	{
  		name: 'Dashboard',
  		icon: 'dashboard'
  	},
  	{
  		name: 'Search',
  		icon: 'search'
  	},
  	{
  		name: 'Account',
  		icon: 'account_circle'
  	},
  	{
  		name: 'Work',
  		icon: 'work'
  	},
  	{
  		name: 'Appointments',
  		icon: 'date_range'
  	},
  	{
  		name: 'Files',
  		icon: 'folder'
  	},
  	{
  		name: 'Settings',
  		icon: 'build'
  	}
  	
  ]

   ngOnInit() {
  }

}
