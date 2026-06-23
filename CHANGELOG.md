# Changelog

## [2.0.0] - Práctica de Cierre — 2026-06-23

### Added
- Sección `#portafolio` con 3 tarjetas de proyectos y semántica avanzada (`article`, `figure`, `figcaption`)
- Sección `#contacto` con formulario accesible (`label`, `aria-labelledby`, `aria-live`)
- Validación del formulario de contacto con JavaScript DOM
- Validación de formato de correo electrónico con expresión regular
- Almacenamiento de mensajes enviados en `localStorage`
- Función bonus para mostrar mensajes guardados en un `div` dinámico
- Variables CSS globales en `:root` para centralizar colores y fuentes
- Media queries para tablet (máx. 768px) y móvil (máx. 480px)
- Transiciones y efectos hover en tarjetas del portafolio
- Estilos de formulario con animación de foco en inputs
- `CHANGELOG.md` con historial de versiones
- `README.md` con instrucciones de clonado por SSH

### Changed
- Navegación actualizada con enlace a la sección Portafolio
- Footer sin `id` (el id `#contacto` se trasladó a la sección del formulario)
- Colores hardcodeados reemplazados por variables CSS

---

## [1.0.0] - Versión anterior

### Added
- Estructura HTML base del portal del equipo
- Estilos CSS iniciales con tarjetas de integrantes y tema oscuro
- Script JS para toggle de sección "Sobre Nosotros" y hover en tarjetas
- Página publicada en GitHub Pages
