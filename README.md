# Equipo 7 — Portal de Presentación

Sitio web colaborativo del Equipo 7 desarrollado para la materia **Desarrollo Web Integral**.  
Construido con HTML semántico, CSS responsivo y JavaScript con validación DOM y `localStorage`.

---

## Integrantes y Roles

| Integrante | Rol | GitHub |
|---|---|---|
| Alex Alvarado | Líder / CSS | [@A1ex9915](https://github.com/A1ex9915) |
| Evelyn Olguin | HTML | [@EvelynOlguin01](https://github.com/EvelynOlguin01) |
| Jovani / Angel | JavaScript | [@AngelBM](https://github.com/AngelBM) |

---

## Clonar el repositorio (SSH)

> Requiere tener configurada una clave SSH en GitHub.  
> Consulta: [Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

```bash
git clone git@github.com:A1ex9915/practica_git.git
cd practica_git
```

---

## Cómo visualizar el sitio

1. Clona el repositorio con el comando de arriba.
2. Abre `index.html` directamente en tu navegador.
3. Para probar el formulario: completa los campos y haz clic en **Enviar**.
4. Verifica los mensajes guardados en: **DevTools → Application → localStorage → `mensajes-contacto`**.

---

## Estructura del proyecto

```
practica_git/
├── index.html       # Estructura HTML: portafolio, formulario, equipo
├── style.css        # Estilos: variables CSS, media queries, transiciones
├── script.js        # JS: validación de formulario y localStorage
├── img/             # Imágenes de los proyectos del portafolio
├── docs/            # Evidencias: capturas de pantalla y git log
├── CHANGELOG.md     # Historial de cambios por versión
└── README.md        # Este archivo
```

---

## Flujo de trabajo Git

Se siguió **GitHub Flow**:

1. Cada integrante creó su rama: `feature/[rol]-[apellido]`
2. Se realizaron commits con **Conventional Commits** (`feat:`, `style:`, `fix:`, `docs:`)
3. Se abrieron Pull Requests con revisión del Líder antes de hacer merge
4. Se resolvió un conflicto simulado en el footer entre la rama JS y `main`

---

## Convención de commits utilizada

```
feat:   nueva funcionalidad
style:  cambios de CSS sin afectar lógica
fix:    corrección de error o conflicto
docs:   actualización de README, CHANGELOG u otros docs
```

---

*Práctica de Cierre — Unidad II: Control de Versiones | Ingeniería en Desarrollo y Gestión de Software*
