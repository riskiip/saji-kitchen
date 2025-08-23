import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

interface Review {
  nama: string;
  review: string;
  score: number;
  foto: string;
}

@Component({
  selector: 'app-customer-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-feedback.component.html',
  styleUrl: './customer-feedback.component.scss',
})
export class CustomerFeedbackComponent implements OnInit, OnDestroy {
  reviews: Review[] = [
    { nama: "Farhan Pratama", review: "Worth the price", score: 5, foto: "assets/images/profile-male-1.jpg" },
    { nama: "Sisca", review: "dimsum mentainya enakk, ukuran dimsumnya juga besar dan berasa daging ayamnyaa 💯", score: 5, foto: "assets/images/profile-female-1.jpg" },
    { nama: "Ayu Galuh", review: "Enak bangetttt, daging nya banyakk. Mentai nya juga mantapp bangett", score: 5, foto: "assets/images/profile-male-2.jpg" },
    { nama: "Bernanda F. Putri", review: "yummy sekalii dagingnya terasaa, mentainya juga enakkkk", score: 5, foto: "assets/images/profile-female-2.jpg" },
    { nama: "Rizky", review: "Akan pesan lagi pastinya!", score: 5, foto: "assets/images/profile-male-1.jpg" },
    { nama: "Dewi", review: "Saus mentainya juara, beda dari yang lain.", score: 5, foto: "assets/images/profile-female-1.jpg" },
    { nama: "Andi", review: "Pelayanannya cepat dan rasanya konsisten.", score: 5, foto: "assets/images/profile-male-2.jpg" },
  ];

  currentIndex = 0;
  private intervalId?: any;

  // Tetap definisikan berapa item yang terlihat
  readonly itemsPerSlide = 4;

  // Cek apakah carousel perlu aktif (jika jumlah item lebih banyak dari yang bisa ditampilkan)
  get isCarouselActive(): boolean {
    return this.reviews.length > this.itemsPerSlide;
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    if (this.isCarouselActive) {
      this.intervalId = setInterval(() => {
        this.next();
      }, 5000);
    }
  }

  resetAutoSlide(): void {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  // Logika baru untuk bergeser satu per satu
  next(): void {
    const maxIndex = this.reviews.length - this.itemsPerSlide;
    if (this.currentIndex >= maxIndex) {
      this.currentIndex = 0; // Kembali ke awal jika sudah di akhir
    } else {
      this.currentIndex++;
    }
  }

  prev(): void {
    const maxIndex = this.reviews.length - this.itemsPerSlide;
    if (this.currentIndex <= 0) {
      this.currentIndex = maxIndex; // Pindah ke akhir jika sedang di awal
    } else {
      this.currentIndex--;
    }
  }

  manualNext(): void {
    this.next();
    this.resetAutoSlide();
  }

  manualPrev(): void {
    this.prev();
    this.resetAutoSlide();
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
