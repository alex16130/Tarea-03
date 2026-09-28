import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <header class="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <span class="text-2xl font-extrabold text-[#12194a]">LINK</span>
          <span class="text-[#12194a]">Brokerage</span>
          <mat-icon>expand_more</mat-icon>
        </div>
        <nav class="flex gap-6 text-sm text-[#12194a]">
          @for (link of links; track link) {
            <a href="#">{{ link }}</a>
          }
        </nav>
      </div>
      <div class="flex items-center gap-6 text-[#12194a]">
        <a href="#">Login</a>
        <button mat-flat-button>Try Link AI</button>
      </div>
    </header>
  `,
})
export class Navbar {
  links = ['Home', 'Buy', 'Sell', 'Our Model', 'Our Platform', 'Join Link'];
}