import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

import { Reporte, ReporteVentas, comparar } from 'src/app/model/modelos';
import { conexion } from 'src/app/model/variables';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  public getTopVentas(reporte: Reporte){
    return this._http.post(`${conexion}top/`, reporte);
  }
  
  public postVentas(model: ReporteVentas){
    return this._http.post(`${conexion}ventas`, model);
  }

  public getUsuarios(model: Reporte){
    return this._http.post(`${conexion}usuarios`, model)
  }
 
  public comparar(model: comparar){
    return this._http.post(`${conexion}comparativa`, model)
  }
}
