import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  providers: [AppService],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  constructor(private service: AppService) {}

  ngOnInit() {
    this.getEmployeeDetail();
    this.getEmployeeDetail2();
  }

  getEmployeeDetail() {
    this.service.getEmployee().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  getEmployeeDetail2() {
    this.service.getEmployee().subscribe((res: any) => {
      console.log(res);
    });
  }
}

bootstrapApplication(App);
