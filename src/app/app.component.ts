import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    // ─── Reveal animation ───────────────────────────────────────────
    const elementosAnimados =
      this.elementRef.nativeElement.querySelectorAll<HTMLElement>('.reveal');

    if (elementosAnimados.length) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const elemento = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              elemento.classList.add('visible');
              this.observer?.unobserve(elemento);
            }
          });
        },
        { root: null, threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      elementosAnimados.forEach((elemento) => this.observer?.observe(elemento));
    }

    // ─── Menú hamburguesa ───────────────────────────────────────────
    const btn = this.elementRef.nativeElement.querySelector<HTMLElement>('#navHamburger');
    const menu = this.elementRef.nativeElement.querySelector<HTMLElement>('#navMenu');

    if (btn && menu) {
      btn.addEventListener('click', () => {
        const open = menu.classList.toggle('nav-open');
        btn.classList.toggle('is-active', open);
      });

      menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          menu.classList.remove('nav-open');
          btn.classList.remove('is-active');
        });
      });
    }
  }

  descargarAPK(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    window.location.href =
      "https://github.com/KultuX/kultux-front/releases/download/v1.3.0-alpha/KultuX.v1.3.0.apk";
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}