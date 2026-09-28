import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule],
  template: `
    <section class="text-center max-w-3xl mx-auto px-6 pt-20 pb-10">
      <h1 class="text-6xl font-semibold leading-tight text-[#12194a]">
        Discover the Future of Real Estate Innovation
      </h1>
      <p class="mt-6 text-gray-600">
        Explore Link.ai's advanced platform designed to transform the way you buy,
        sell, and manage properties. Simplify your journey with cutting-edge tools.
      </p>
      <button mat-flat-button class="mt-8">Get Started</button>
    </section>
  `,
})
export class Hero {}