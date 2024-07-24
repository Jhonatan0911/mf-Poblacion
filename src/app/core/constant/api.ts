import { environment } from 'src/environments/environment';

export class APIs {

  static combo = {
    //Globales
    getParTipoDocumento: `${environment.apiParametrizacion}/api/ParTipoDocumento`,
    getParDiagnosticos: `${environment.apiParametrizacion}/api/ParDiagnosticos/GetParDiagnosticoPorTermino`,
    getParEps: `${environment.apiParametrizacion}/api/ParEps`,
    getParGeneros: `${environment.apiParametrizacion}/api/ParGeneros`,
    getParSexo: `${environment.apiParametrizacion}/api/ParSexo`,
    getParOrientacionSexual: `${environment.apiParametrizacion}/api/ParOrientacionSexual`,
    getParEstadoCiviles: `${environment.apiParametrizacion}/api/ParEstadoCiviles`,
    getParEscolaridades: `${environment.apiParametrizacion}/api/ParEscolaridades`,
    getParOcupaciones: `${environment.apiParametrizacion}/api/ParOcupaciones`,
    getParReligiones: `${environment.apiParametrizacion}/api/ParReligiones`,
    getParEtnias: `${environment.apiParametrizacion}/api/ParEtnias`,
    getParDiscapacidades: `${environment.apiParametrizacion}/api/ParDiscapacidades`,
    getParDepartamentos: `${environment.apiParametrizacion}/api/ParDepartamentos`,
    getParCiudades: `${environment.apiParametrizacion}/api/ParCiudades/ParCiudadByDepartamentoId`,
    getParEstratos: `${environment.apiParametrizacion}/api/ParEstratos`,
    getParProgramas: `${environment.apiParametrizacion}/api/ParProgramas`,
    getParRegimen: `${environment.apiParametrizacion}/api/ParRegimen`,
    getParContratos: `${environment.apiParametrizacion}/api/ParContratos`,
    getParParentesco: `${environment.apiParametrizacion}/api/ParParentesco`,
    getParIvr: `${environment.apiParametrizacion}/api/ParIVRLlamada`,
    getParSeguros: `${environment.apiParametrizacion}/api/ParSeguro`,
  };


  static poblacion = {
    getPoblacionByFilter: `${environment.apiPaciente}/api/Paciente/CargarDatosPacienteByIdentificacion/`,
    getPoblacion: `${environment.apiPacienteNew}/api/v1/Paciente`,
    postPaciente: `${environment.apiPacienteNew}/api/v1/Paciente`,
    editPaciente: `${environment.apiPacienteNew}/api/v1/Paciente`,
  };

  static notas = {
    getNotas: `${environment.apiPacienteNew}/api/v1/Bitacora`,
    postNotas: `${environment.apiPacienteNew}/api/v1/Bitacora`,
  };
}
