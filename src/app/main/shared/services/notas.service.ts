import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIs } from 'src/app/core/constant/api';
import { ApiService } from 'src/app/core/services/api.service';
import { NotaDto, Notas } from '../models/Notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  form = new FormGroup({
    tipificacion: new FormControl<number>(0, [Validators.required]),
    observacion: new FormControl<string>('', [Validators.required])
  })

  constructor(
    private _apiService: ApiService,
  ) { }


  public getNotasByPacienteId(pacienteId: number){

    const params = new HttpParams()
    .set("pacienteId", pacienteId != null ? pacienteId : "");

    return this._apiService.get<Notas[]>(APIs.notas.getNotas, false, params);
  }

  public createNota(nota: NotaDto){
    return this._apiService.post<NotaDto, any>(APIs.notas.postNotas, nota);
  }

}
