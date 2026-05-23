import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy
} from '@angular/core';

const MANUAL_URLS: Record<string, string> = {
  usuario:  'https://github.com/KultuX/kultux.docs/releases/download/v1/Manual_Usuario_Movil.pdf',
  gestor:   'https://github.com/KultuX/kultux.docs/releases/download/v1/Manual.Gestor.-.KultuX.Web.pdf',
  proyecto: 'https://github.com/KultuX/kultux.docs/releases/download/v1/Definicion.de.proyecto.KultuX.pdf',
  tecnico:  'https://github.com/KultuX/kultux.docs/releases/download/v1/Manual.Tenico.-.KultuX.pdf',
};

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

  /** Descarga la APK desde GitHub Releases */
  descargarAPK(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    window.location.href =
      'https://github.com/KultuX/kultux-front/releases/download/v1.4/KultuX.v1.4.apk';
  }

  /**
   * Descarga uno de los cuatro manuales PDF desde GitHub Releases.
   * @param e   Evento del click (puede venir del div de la tarjeta)
   * @param key 'usuario' | 'gestor' | 'proyecto' | 'tecnico'
   */
  descargarManual(e: MouseEvent, key: string): void {
    e.preventDefault();
    e.stopPropagation();
    const url = MANUAL_URLS[key];
    if (!url) return;

    // Abre en nueva pestaña para que el navegador gestione la descarga del PDF
    // sin abandonar la landing.
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}