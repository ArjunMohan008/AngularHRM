import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showHome: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // if dashboard only have /dashboard and not have any / child active route showHome
    if (this.router.url === '/dashboard') {
      this.showHome = true;
    }else {
      this.showHome = false;
    }
  }

  goToHome() {
    this.router.navigateByUrl('/dashboard');
  }

}
