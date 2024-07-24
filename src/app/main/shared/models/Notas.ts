export interface Notas {
  id: number,
  tipificacionIVRId: number,
  observacion: string,
  pacienteId: number,
  usuarioCreacionId: number,
  fechaCreacion: Date,
  ivrDescripcion: string,
  usuario: string
}

export interface NotaDto {
  tipificacionIVRId: number,
  observacion: string,
  pacienteId: number,
  usuarioCreacionId: number,
}
