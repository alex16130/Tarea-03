import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-preview',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatCheckboxModule, MatIconModule],
  template: `
    <section class="max-w-5xl mx-auto px-6 pb-20">
      <div class="grid grid-cols-[200px_1fr_260px] gap-4" style="transform: perspective(1500px) rotateY(-8deg) rotateX(4deg);">

        <!-- Panel lateral -->
        <mat-card class="p-4">
          <span class="text-xl font-extrabold text-[#12194a] mb-6 block">LINK</span>
          <p class="text-xs text-gray-500 mb-3">BUYING PROPERTY</p>
          <ul class="space-y-3 text-sm">
            @for (step of steps; track step) {
              <li [class.font-semibold]="step === 'Search'">{{ step }}</li>
            }
          </ul>
          <div class="mt-16 flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-gray-300"></div>
            <div>
              <p class="text-sm">Andrew Malekie</p>
              <p class="text-xs text-gray-500">Realtor</p>
            </div>
          </div>
        </mat-card>

        <!-- Chat -->
        <mat-card class="p-4">
          <p class="text-sm font-medium">2183 NE 3rd Ave, Camas, WA 98607</p>
          <div class="mt-3">
            <p class="text-xs mb-1">Search 46%</p>
            <mat-progress-bar mode="determinate" [value]="46" />
          </div>

          <div class="mt-4 text-sm">
            <p class="font-medium">YOU</p>
            <p class="text-gray-600">
              A modern kitchen and proximity to schools would be ideal.
              Also, I'd like to be within reasonable driving distance to my workplace.
            </p>
          </div>

          <div class="mt-4 text-sm">
            <p class="font-medium">LINK AI</p>
            <p class="text-gray-600">Based on our data here are some appropriate houses:</p>
          </div>

          <div class="grid grid-cols-2 gap-3 mt-3">
            @for (house of houses; track house.type) {
              <mat-card class="overflow-hidden">
                <img [src]="house.img" class="h-32 w-full object-cover" alt="" />
                <div class="flex gap-2 p-2">
                  <span class="text-[10px] font-semibold px-2 py-1 rounded border border-gray-300">{{ house.type }}</span>
                  <span class="text-[10px] font-semibold px-2 py-1 rounded bg-teal-100 text-teal-600">{{ house.tag }}</span>
                </div>
              </mat-card>
            }
          </div>
        </mat-card>

        <!-- Tareas -->
        <div class="space-y-3">
          <mat-card class="p-4">
            <div class="flex justify-between items-center mb-3">
              <p class="font-medium">Tasks <span class="text-xs text-gray-500">1 OF 8</span></p>
              <mat-checkbox checked>Show finished</mat-checkbox>
            </div>
            @for (task of tasks; track task.title) {
              <div class="border rounded-lg p-3 mb-2" [class.border-teal-300]="task.done">
                <div class="flex justify-between text-xs text-gray-500">
                  <span>{{ task.kind }}</span>
                  <span [class.text-teal-500]="task.done">{{ task.done ? 'COMPLETE' : 'NOT STARTED' }}</span>
                </div>
                <p class="text-sm font-medium mt-1">{{ task.title }}</p>
              </div>
            }
          </mat-card>

          <mat-card class="p-4">
            <div class="flex justify-between text-sm">
              <span class="font-medium">Saved properties</span>
              <a href="#" class="text-xs">See all</a>
            </div>
            <p class="mt-2 font-semibold">$427,000</p>
          </mat-card>
        </div>

      </div>
    </section>
  `,
})
export class DashboardPreview {
  steps = ['Search', 'Tour', 'Offer', 'Escrow', 'Close'];

  houses = [
    { type: 'SINGLE FAMILY', tag: 'AFFORDABLE', img: 'casa1.jpg' },
    { type: 'CONDOMINIUM', tag: 'STRETCH', img: 'casa2.jpg' },
  ];

  tasks = [
    { kind: 'ACTION', title: 'Verify Property Details', done: true },
    { kind: 'UPLOAD', title: 'Upload Proof of Identity document', done: false },
    { kind: 'ACTION', title: 'Get Pre Qualified', done: false },
  ];
}