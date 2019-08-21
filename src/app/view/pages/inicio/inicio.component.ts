import { Component, OnInit } from "@angular/core";
import { Label, MultiDataSet, Color } from "ng2-charts";
import { ChartType, ChartDataSets, ChartOptions } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import * as pluginAnnotations from 'chartjs-plugin-annotation';

import { ApiService } from "src/app/data/services/api.service";
import { Reporte, ReporteVentas, usuario, comparar, comparativoUSu } from "src/app/model/modelos";
import { FormBuilder } from '@angular/forms';

@Component({  
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  public info: any = [];
  public dimension: number = 1;
  public top: number = 5;
  public infoUsuario: any = []

  // INFORMACION DE DOUNT
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = "doughnut";
  public chartColors: any[] = [
    { backgroundColor: ["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] }
  ];

  // INFORMACION BAR
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [new comparativoUSu()]; // [{ data: [], label: "Empleados" }];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  // INFORMACION LINE BAR
  public lineChartData: ChartDataSets[] = [new comparativoUSu()];

  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [{}]
    },
    annotation: {
      annotations: [{}],
    },
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  // OTRAS DATOS
  public reporte = new Reporte();
  public model = new ReporteVentas();
  public datoCompa =  new comparar()

  // MULTIPLE SELECT
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  usuarios: any = []
  selectedItems: any = []
  dropdownSettings: any = {};
  datoUsuario = new usuario();

  constructor(private servicio: ApiService, private fb: FormBuilder) {
    this.getTopVentas();
    this.getHistory(this.model);
    this.usuariosLoad();
  }
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'nombre',
      textField: 'nombre',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      enableCheckAll: true
    };
  }
  onChangeCaracter(deviceValue) {
    this.dimension = deviceValue;
    this.reporte.dimension = this.dimension;
    this.resetVar();
    this.getTopVentas();

    this.usuariosLoad();
  }
  public usuariosLoad(){
    this.selectedItems = [];
    this.servicio.getUsuarios(this.reporte).subscribe((result: any) => {
      this.usuarios = result
    });
  }
  public getTopVentas() {
    this.servicio.getTopVentas(this.reporte).subscribe((result: any) => {
      result.forEach(element => {
        this.info.push(element);
        this.doughnutChartLabels.push(element.mes);
        this.doughnutChartData.push(element.ventas);
      });
    });
  }
  public getHistory(model: ReporteVentas) {
    this.servicio.postVentas(model).subscribe((result: any) => {
      let data: any = [];

      result.forEach(element => {
        this.barChartLabels.push(element.mes);
        data.push(element.ventas);
      });

      this.barChartData[0].data = data;
    });
  }
  public identificar(nombre: string) {
    this.model = new ReporteVentas();
    this.resetHis();

    this.model.Item = this.dimension;
    this.model.nombre = nombre;

    this.getHistory(this.model);
  }
  public resetVar() {
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    this.info = [];
  }
  public resetHis() {
    this.barChartLabels = [];
    this.barChartData[0].data = [];
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };

  onItemSelect(item: any) {    
    // this.datoCompa.Nombres = this.selectedItems;
    // this.datoCompa.dimension = this.dimension;
    // this.lineChartLabels = [];
    // this.lineChartData = [];

    // let prueba = new Array<Array<any>>();

    // let info = new Array<any>(this.selectedItems.length);

    // this.servicio.comparar(this.datoCompa).subscribe((result: any) => {
    //   let infoBi: any = [];
    //   result.forEach((element, index) => {
    //     // console.log(index)
    //     console.log(element.datos)

    //     // console.log(element.datos[index])

    //     element.datos.forEach((r, i) => {
    //       console.log(index, i)

    //       // prueba[index][i] = r;

    //     });

    //     this.lineChartLabels.push(element.fecha)
    //   });  
    //   info.push(infoBi)
    //   console.log(info)    
    //   console.log(prueba)
    // });
  }
}
