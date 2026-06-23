function mostrarInfo() {
  const infoBox = document.getElementById("infoBox");

  if (infoBox.style.display === "none" || infoBox.style.display === "") {
    infoBox.style.display = "block";
  } else {
    infoBox.style.display = "none";
  }
}


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.borderColor = "#38bdf8";
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderColor = "rgba(255, 255, 255, 0.15)";
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');

  mostrarMensajeAutor();

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email  = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      mostrarMensaje('Por favor completa todos los campos.', 'error');
      return;
    }

    if (!validarEmail(email)) {
      mostrarMensaje('Escribe un correo electrónico válido.', 'error');
      return;
    }

    guardarEnStorage({ nombre, email, mensaje });
    mostrarMensaje('¡Mensaje enviado correctamente! ✅', 'exito');
    form.reset();
  });
});

function mostrarMensajeAutor() {
  const hero = document.querySelector('.hero');
  if (!hero || hero.querySelector('.autor-badge')) return;

  const badge = document.createElement('div');
  badge.className = 'autor-badge';
  badge.textContent = 'Actualización dinámica hecha por Ángel';
  badge.style.cssText = 'display:inline-block; margin-top:16px; padding:8px 14px; border-radius:999px; background:rgba(56, 189, 248, 0.15); color:#7dd3fc; border:1px solid rgba(125, 211, 252, 0.35); font-size:0.95rem; font-weight:600;';

  hero.appendChild(badge);
}

function guardarEnStorage(datos) {
  const mensajes = JSON.parse(localStorage.getItem('mensajes-contacto')) || [];
  datos.fecha = new Date().toLocaleString('es-MX');
  mensajes.push(datos);
  localStorage.setItem('mensajes-contacto', JSON.stringify(mensajes));
}

function verMensajesGuardados() {
  const mensajes = JSON.parse(localStorage.getItem('mensajes-contacto')) || [];
  const contenedor = document.getElementById('lista-mensajes');

  if (!contenedor) return;

  if (mensajes.length === 0) {
    contenedor.innerHTML = '<p style="color:#94a3b8">No hay mensajes guardados.</p>';
    contenedor.style.display = 'block';
    return;
  }

  const html = mensajes.map((m, i) =>
    `<div class="mensaje-guardado">
      <strong>${i + 1}. ${m.nombre}</strong> — ${m.email}<br>
      <em>${m.mensaje}</em><br>
      <small>${m.fecha}</small>
    </div>`
  ).join('');

  contenedor.innerHTML = html;
  contenedor.style.display = 'block';
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function mostrarMensaje(texto, tipo) {
  const el = document.getElementById('msg-respuesta');
  el.textContent = texto;
  el.className = tipo === 'error' ? 'msg-error' : 'msg-exito';
}
