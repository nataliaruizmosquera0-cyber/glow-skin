
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.onclick = function() {
    mensaje.textContent =
        "¡Recuerda limpiar, hidratar y proteger tu piel! 💗";
};
function mostrarInfo(tipo) {
  const informacion = document.getElementById("informacion");

  if (tipo === "limpieza") {
    informacion.innerHTML = `
      <h3>🧼 Limpieza facial</h3>
      <p>La limpieza ayuda a retirar la suciedad, el sudor y el exceso de grasa del rostro.</p>
      <p><strong>Pasos:</strong></p>
      <ol>
        <li>Lávate las manos.</li>
        <li>Moja tu rostro con agua tibia.</li>
        <li>Usa un limpiador suave.</li>
        <li>Enjuaga y seca con una toalla limpia, sin frotar.</li>
      </ol>
      <p><strong>Consejo:</strong> evita los productos que irriten o resequen tu piel.</p>
    `;
  } else if (tipo === "hidratacion") {
    informacion.innerHTML = `
      <h3>💧 Hidratación</h3>
      <p>La hidratación ayuda a mantener la piel suave y a proteger su barrera natural.</p>
      <p><strong>Consejos:</strong></p>
      <ol>
        <li>Usa una crema hidratante adecuada para tu piel.</li>
        <li>Aplícala después de lavar tu rostro.</li>
        <li>Evita productos que te causen ardor o irritación.</li>
      </ol>
    `;
  } else if (tipo === "solar") {
    informacion.innerHTML = `
      <h3>☀️ Protección solar</h3>
      <p>El protector solar ayuda a proteger la piel de los rayos ultravioleta.</p>
      <p><strong>Consejos:</strong></p>
      <ol>
        <li>Usa protector solar de amplio espectro SPF 30 o superior.</li>
        <li>Aplícalo antes de salir al sol.</li>
        <li>Vuelve a aplicarlo aproximadamente cada dos horas al estar al aire libre y después de nadar o sudar.</li>
        <li>Complementa con sombra, gorra o sombrero.</li>
      </ol>
    `;
  }
}