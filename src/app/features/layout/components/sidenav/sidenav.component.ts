import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: NbMenuItem[] = [
    {
      title: 'Departments',
      icon: 'lock-outline',
      link: 'departments',

    },
    {
      title: 'Employees',
      icon: 'person-outline',
      link: 'employees',
    },
  ];

}
