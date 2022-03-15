import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface DepartmentData {
  id: string;
  name: string;
  numberOfEmployees: string;
}

const mockDepartments: DepartmentData[] = [
  {
    id: '1',
    name: 'IT',
    numberOfEmployees: '100',
  },
  {
    id: '2',
    name: 'Finance',
    numberOfEmployees: '50',
  },
  {
    id: '3',
    name: 'HR',
    numberOfEmployees: '200',
  },
  {
    id: '4',
    name: 'Marketing',
    numberOfEmployees: '150',
  },
  {
    id: '5',
    name: 'Sales',
    numberOfEmployees: '300',
  },
  {
    id: '6',
    name: 'Operations',
    numberOfEmployees: '250',
  },
  {
    id: '7',
    name: 'Distribution',
    numberOfEmployees: '150',
  },
  {
    id: '8',
    name: 'Production',
    numberOfEmployees: '200',
  },
  {
    id: '9',
    name: 'Logistics',
    numberOfEmployees: '100',
  },
  {
    id: '10',
    name: 'Human Resources',
    numberOfEmployees: '150',
  },
];

@Component({
  selector: 'app-list-departments',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.scss']
})
export class ListDepartmentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'numberOfEmployees', 'actions'];
  dataSource: MatTableDataSource<DepartmentData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private _snackBar: MatSnackBar) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(mockDepartments);
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    },0);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteDepartment(id: string) {
    this.openSnackBar('Department deleted', 'OK');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  editDepartment(id: string) {
    this.router.navigateByUrl('dashboard/departments/edit/' + id);
  }

}
