import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface DepartmentData {
  id: string;
  firstName: string;
  department: string;
}

const mockDepartments: DepartmentData[] = [
  {
    id: '1',
    firstName: 'John',
    department: 'IT',
  },
  {
    id: '2',
    firstName: 'Jane',
    department: 'Finance',
  },
  {
    id: '3',
    firstName: 'Mary',
    department: 'HR',
  },
  {
    id: '4',
    firstName: 'Bob',
    department: 'Marketing',
  },
  {
    id: '5',
    firstName: 'Sam',
    department: 'Sales',
  },
  {
    id: '6',
    firstName: 'Phil',
    department: 'Operations',
  },
  {
    id: '7',
    firstName: 'Linda',
    department: 'Distribution',
  },
  {
    id: '8',
    firstName: 'Sue',
    department: 'Production',
  },
  {
    id: '9',
    firstName: 'Mary',
    department: 'Logistics',
  },
  {
    id: '10',
    firstName: 'John',
    department: 'HR',
  },
];


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'department', 'actions'];
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
    this.router.navigateByUrl('/departments/edit/' + id);

  }


}
