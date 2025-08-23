import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

interface Review {
  nama: string;
  review: string;
  score: number; // Angka dari 1 sampai 5
  foto: string; // Path ke file gambar atau URL
}

@Component({
  selector: 'app-customer-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-feedback.component.html',
  styleUrl: './customer-feedback.component.scss',
})
export class CustomerFeedbackComponent {
  // Data ulasan statis disimpan di sini
  reviews: Review[] = [
    {
      nama: "Farhan Pratama",
      review: "Worth the price",
      score: 5,
      foto: "assets/images/profile-male-1.jpg" // Ganti dengan path foto Anda
    },
    {
      nama: "Sisca",
      review: "dimsum mentainya enakk, ukuran dimsumnya juga besar dan berasa daging ayamnyaa 💯",
      score: 5,
      foto: "assets/images/profile-female-1.jpg" // Ganti dengan path foto Anda
    },
    {
      nama: "Ayu Galuh",
      review: "Enak bangetttt, daging nya banyakk. Mentai nya juga mantapp bangett",
      score: 5,
      foto: "assets/images/profile-male-2.jpg" // Ganti dengan path foto Anda
    },
    {
      nama: "Bernanda F. Putri",
      review: "yummy sekalii\n" +
        "dagingnya terasaa, mentainya juga enakkkk",
      score: 5,
      foto: "assets/images/profile-female-2.jpg" // Ganti dengan path foto Anda
    }
  ];

  constructor() { }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
