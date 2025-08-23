import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.scss'
})
export class GaleryComponent implements OnInit, OnDestroy {
  // Daftar semua gambar yang akan ditampilkan
  images: GalleryImage[] = [
    { id: 1, src: 'assets/dimsum/dimsum1.png', alt: 'Dimsum Platter' },
    { id: 2, src: 'assets/dimsum/dimsum4.png', alt: 'Close up Dimsum Mentai' },
    { id: 3, src: 'assets/dimsum/dimsum5.png', alt: 'Dimsum being prepared' },
    { id: 4, src: 'assets/dimsum/dimsum2.png', alt: 'Steaming hot dimsum' },
    { id: 5, src: 'assets/dimsum/dimsum3.png', alt: 'Dimsum being prepared' },
    { id: 6, src: 'assets/dimsum/dimsum6.png', alt: 'Steaming hot dimsum' }
  ];

  // Variabel untuk menyimpan gambar yang sedang aktif/terpilih
  selectedImage: GalleryImage | undefined;
  private intervalId: any;

  // Variabel untuk animasi fade saat gambar berganti
  isFading = false;

  ngOnInit(): void {
    // Saat komponen dimuat, pilih gambar pertama
    if (this.images.length > 0) {
      this.selectedImage = this.images[0];
    }
    // Mulai pergantian gambar otomatis
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    // Hentikan interval saat komponen dihancurkan untuk mencegah memory leak
    clearInterval(this.intervalId);
  }

  // Fungsi untuk memulai pergantian gambar otomatis setiap 3 detik
  startAutoPlay(): void {
    this.intervalId = setInterval(() => {
      this.showNextImage();
    }, 3000); // 3000 ms = 3 detik
  }

  // Fungsi untuk memilih gambar secara manual saat thumbnail di-klik
  selectImage(image: GalleryImage): void {
    if (this.selectedImage?.id === image.id) return;

    this.isFading = true; // Mulai animasi fade-out
    clearInterval(this.intervalId); // Hentikan auto play sementara

    setTimeout(() => {
      this.selectedImage = image;
      this.isFading = false; // Selesaikan animasi fade-in
      this.startAutoPlay(); // Mulai lagi auto play
    }, 300); // Durasi harus cocok dengan transisi di CSS
  }

  // Fungsi untuk menampilkan gambar berikutnya dalam urutan
  showNextImage(): void {
    if (!this.selectedImage) return;

    this.isFading = true; // Mulai animasi fade-out

    setTimeout(() => {
      const currentIndex = this.images.findIndex(img => img.id === this.selectedImage?.id);
      // Gunakan modulo (%) untuk loop kembali ke awal setelah gambar terakhir
      const nextIndex = (currentIndex + 1) % this.images.length;
      this.selectedImage = this.images[nextIndex];
      this.isFading = false; // Selesaikan animasi fade-in
    }, 300);
  }
}
