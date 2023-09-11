export function obtenerFechaActual() {
  const fecha = new Date()

  const dia = String(fecha.getDate()).padStart(2, '0')
  const mes = String(fecha.getMonth() + 1).padStart(2, '0')
  const anio = String(fecha.getFullYear()).slice(-2)

  return `${dia}/${mes}/${anio}`
}
