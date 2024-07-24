import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from 'src/app/core/constant/api';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ParametrizacionService {

  constructor(
    private _apiService: ApiService,
  ) { }

  public getParEps(){
    return this._apiService.get<any>(APIs.combo.getParEps, false);
  }

  public getParContratos(){
    return this._apiService.get<any>(APIs.combo.getParContratos, false);
  }

  public getParTipoDocumento(){
    return this._apiService.get<any>(APIs.combo.getParTipoDocumento, false);
  }

  public getParGenero(){
    return this._apiService.get<any>(APIs.combo.getParGeneros, false);
  }

  public getParSexo(){
    return this._apiService.get<any>(APIs.combo.getParSexo, false);
  }

  public getParOrientacionSexual(){
    return this._apiService.get<any>(APIs.combo.getParOrientacionSexual, false);
  }

  public getParEstadoCiviles(){
    return this._apiService.get<any>(APIs.combo.getParEstadoCiviles, false);
  }

  public getParEscolaridades(){
    return this._apiService.get<any>(APIs.combo.getParEscolaridades, false);
  }

  public getParOcupaciones(){
    return this._apiService.get<any>(APIs.combo.getParOcupaciones, false);
  }

  public getParReligiones(){
    return this._apiService.get<any>(APIs.combo.getParReligiones, false);
  }

  public getParEtnias(){
    return this._apiService.get<any>(APIs.combo.getParEtnias, false);
  }

  public getParDiscapacidades(){
    return this._apiService.get<any>(APIs.combo.getParDiscapacidades, false);
  }

  public getParDepartamentos(){
    return this._apiService.get<any>(APIs.combo.getParDepartamentos, false);
  }

  public getParCiudadesByDepartamento(departamento: number){

    const params = new HttpParams()
    .set("id", departamento != null ? departamento : "");

    return this._apiService.get<any>(APIs.combo.getParCiudades, false, params);
  }

  public getParEstratos(){
    return this._apiService.get<any>(APIs.combo.getParEstratos, false);
  }

  public getParProgramas(){
    return this._apiService.get<any>(APIs.combo.getParProgramas, false);
  }

  public getParRegimen(){
    return this._apiService.get<any>(APIs.combo.getParRegimen, false);
  }

  public getParParentesco(){
    return this._apiService.get<any>(APIs.combo.getParParentesco, false);
  }

  public getParDiagnosticosByTermino(termino: string){

    const params = new HttpParams()
    .set("termino", termino != null ? termino : "");

    return this._apiService.get<any>(APIs.combo.getParDiagnosticos, false, params);
  }

  public getParIvr(){
    return this._apiService.get<any>(APIs.combo.getParIvr, false);
  }

  public getParSeguros(){
    return this._apiService.get<any>(APIs.combo.getParSeguros, false);
  }
}
