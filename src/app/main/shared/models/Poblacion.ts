import { Combo } from "./Combo";

export interface PoblacionFilter {
  tipoDocumentoId: number,
  numeroDocumento: string,
}


export interface PoblacionDto {
  id?: number;
  nombres: string;
  primerApellido: string;
  segundoApellido: string;
  tipoIdentificacionId: number;
  identificacion: string;
  fechaNacimiento: Date;
  edad: number;
  sexo_Id: number;
  creenciaReligiosaId: number | null;
  departamentoResidencia: number;
  provinciaResidencia: number;
  distritoResidencia: string;
  referencia: string | null;
  direccion: string;
  telefono: string | null;
  celular: string;
  correo: string;
  tipoPlan: string | null;
  inicioVigencia: Date | null;
  codigoAsegurado: string | null;
  tipoAfiliacion: string | null;
  fechaAfiliacion: Date | null;
  contratante: string |null;
  seguro: number;
  planesSeguro: string | null;
  titular: TitularDto | null;
  usuarioCreacionId: number;
}

export interface TitularDto {
  idPaciente: number;
  parentescoId: number;
}


export interface PoblacionRes {
  id: number;
  nombre: string;
  primer_Apellido: string;
  segundo_Apellido: string;
  tipo_Identificacion: string;
  identificacion: string;
  fecha_Nacimiento: string;
  edad: number;
  genero: string;
  orientacion: string;
  estadoCivil: string;
  escolaridad: string;
  ocupacion: string;
  religion: string;
  etnia: string;
  discapacidad: string;
  desplazado: boolean;
  familiasAccion: boolean;
  departamentoNacimientoId: number;
  departamentoResidencia: number;
  pronvinciaNacimiento: number;
  pronvinciaResidencia: number;
  distritoResidencia: string;
  referencia: string;
  direccion: string;
  estrato: number;
  telefono: string;
  celular: string;
  correo: string;
  eps: any;
  salario: string;
  cuotaModeradora: string;
  rango: string;
  nivelSisben: string;
  programasId: number[];
  regimen: string;
  tipoUsuario: string;
  contratos: string;
  pacientePac: boolean;
  tipoPlan: string;
  inicioVigencia: Date;
  codigoAsegurado: string;
  tipoAfiliacion: string;
  fechaAfiliacion: Date;
  contratante: string;
  seguro: string;
  planesSeguro: string;
  titular: TitularDto
}
