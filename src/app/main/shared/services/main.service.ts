import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIs } from 'src/app/core/constant/api';
import { ApiService } from 'src/app/core/services/api.service';
import { PoblacionDto, PoblacionFilter, PoblacionRes } from '../models/Poblacion';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  pacienteSearch!: PoblacionRes | null;

  swVisiblePaciente: boolean = false;

  form_buscar = new FormGroup({
    tipo_documento: new FormControl<number>(0, [Validators.required]),
    numero_documento: new FormControl<string>('', [Validators.required])
  })

  form_buscar_titular = new FormGroup({
    tipo_documento: new FormControl<number>(0, [Validators.required]),
    numero_documento: new FormControl<string>('', [Validators.required])
  })

  form_paciente = new FormGroup({
    personales: new FormGroup({
      nombres: new FormControl<string>('', [Validators.required]),
      primerApellido: new FormControl<string>('', [Validators.required]),
      segundoApellido: new FormControl<string>('', [Validators.required]),
      tipoIdentificacion: new FormControl<any>('', [Validators.required]),
      identificacion: new FormControl<any>('', [Validators.required]),
      fechaNacimiento: new FormControl<Date>(new Date(), [Validators.required]),
      edad: new FormControl<number>({value: 0, disabled: true}, [Validators.required]),
      sexo: new FormControl<number>(0, [Validators.required]),
      creenciaReligiosa: new FormControl<number | null>(null),
    }),
    location: new FormGroup({
      departamentoResidencia: new FormControl<number>(0, [Validators.required]),
      pronvinciaResidencia: new FormControl<number>(0, [Validators.required]),
      distritoResidencia: new FormControl('', [Validators.required]),
      referencia: new FormControl(''),
      direccion: new FormControl('', [Validators.required]),
    }),
    contacto: new FormGroup({
      telefono: new FormControl<string | null>(null),
      celular: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required])
    }),
    salud: new FormGroup({
      swHasTitular: new FormControl<boolean>(false),
      tipoPlan: new FormControl<string | null>(null),
      inicioVigencia: new FormControl<Date | null>(null),
      codigoAsegurado: new FormControl<string | null>(null),
      contratante: new FormControl<string | null>(null),
      tipoAfiiacion: new FormControl<string | null>(null),
      fechaAfiliaacion: new FormControl<Date |null>(null),
      seguro: new FormControl<number | null>(null, [Validators.required]),
      planesSeguro: new FormControl<string | null>(null),
    }),
    titular: new FormGroup({
      parentesco: new FormControl<number | null>(null),
    })
  })



  constructor(
    private _apiService: ApiService,
  ) { }

  public getPoblacion(poblacionFilter: PoblacionFilter){

    const params = new HttpParams()
    .set("tipoIdentificacionId", poblacionFilter.tipoDocumentoId != null ? poblacionFilter.tipoDocumentoId : "")
    .set("identificacion", poblacionFilter.numeroDocumento != null ? poblacionFilter.numeroDocumento : "");

    return this._apiService.get<any>(APIs.poblacion.getPoblacion, false, params);
  }

  public getPoblacionByFilter(poblacionFilter: PoblacionFilter){


    const params = new HttpParams()
    .set("tipoIdentificacionId", poblacionFilter.tipoDocumentoId != null ? poblacionFilter.tipoDocumentoId : "")
    .set("identificacion", poblacionFilter.numeroDocumento != null ? poblacionFilter.numeroDocumento : "");

    return this._apiService.get<any>(APIs.poblacion.getPoblacion, false, params);
  }

  public createPaciente(paciente: PoblacionDto){
    return this._apiService.post<PoblacionDto, number>(APIs.poblacion.postPaciente, paciente);
  }

  public editPaciente(paciente: PoblacionDto){
    return this._apiService.put<PoblacionDto, any>(APIs.poblacion.editPaciente, paciente);
  }

}
