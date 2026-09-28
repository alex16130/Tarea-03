import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { DashboardPreview } from './components/dashboard-preview/dashboard-preview';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, DashboardPreview],
  template: `
    <app-navbar />
    <app-hero />
    <app-dashboard-preview />
  `,
})
export class App {}