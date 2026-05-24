# KultuX — Landing Page
![Angular](https://img.shields.io/badge/Angular-19.x-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-TFG-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

Landing page pública de la plataforma **KultuX**.
Actúa como punto de entrada al ecosistema, presentando el proyecto y facilitando el acceso a la descarga de la aplicación móvil y a la web de gestión.

---

## Características
- Presentación general de la plataforma y sus funcionalidades.
- Acceso directo a la descarga de la APK de la aplicación móvil.
- Enlace de acceso a la web de gestión.
- Diseño responsive adaptado a dispositivos móviles y escritorio.
- Desarrollada como Single Page Application (SPA) con Angular.

---

## Tecnologías
<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---

## Arquitectura del proyecto
```text
src/
├── app/
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── models/
├── assets/
└── environments/
```

---

## Requisitos
- Node.js 18+
- Angular CLI 19+

---

## Variables de entorno
| Variable | Descripción |
|---|---|
| `API_URL` | URL base del API Gateway |

---

## Ejecución local

### Instalar dependencias
```bash
npm install
```

### Servidor de desarrollo
```bash
ng serve
```
Abre el navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar cualquier archivo fuente.

### Compilar proyecto
```bash
ng build
```
Los artefactos de compilación se almacenarán en el directorio `dist/`.

---

## Despliegue en Vercel

### Configuración requerida
Crear un fichero `vercel.json` en la raíz del proyecto con el siguiente contenido:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Parámetros de build en Vercel
| Parámetro | Valor |
|---|---|
| Build Command | `npm run build` |
| Output Directory | `dist/kultux-landingpage/browser` |
| Install Command | `npm install` |

---

## Generación de componentes
```bash
ng generate component component-name
```
Para ver todos los esquemas disponibles:
```bash
ng generate --help
```

---

## Tests
### Unitarios
```bash
ng test
```
### End-to-end
```bash
ng e2e
```

---

## Recursos adicionales
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Vercel Documentation](https://vercel.com/docs)

---

## Licencia
Este proyecto está licenciado bajo la licencia MIT.
