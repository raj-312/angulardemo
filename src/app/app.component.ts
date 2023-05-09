import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, RowGroupingDisplayType } from 'ag-grid-community';
import '../styles.css';
// Required feature modules are registered in app.module.ts
@Component({
  selector: 'app-root',
  template: `<ag-grid-angular
    style="width: 100%;height: 94vh;padding: 50px;"
    class="ag-theme-alpine"
    [columnDefs]="columnDefs"
    [defaultColDef]="defaultColDef"
    [groupDisplayType]="groupDisplayType"
    [groupRowRendererParams]="groupRowRendererParams"
    [groupDefaultExpanded]="groupDefaultExpanded"
    [groupRemoveSingleChildren]="true"
    [animateRows]="true"
    [rowData]="rowData"
    (gridReady)="onGridReady()"
  ></ag-grid-angular>`,
})
export class AppComponent {
  public columnDefs: ColDef[] = [
    {
      headerName: '',
      width: 45,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      suppressMenu: true,
      resizable: true,
      pinned: 'left',
      lockPinned: true,
      lockPosition: true,
      field: '',
      suppressColumnsToolPanel: true,
      editable: false,
      suppressSizeToFit: true,
      sortable: true,
      suppressMovable: true,
      suppressFiltersToolPanel: true,
      suppressNavigable: true,
      suppressCellFlash: true
    },
    { field: 'country', rowGroup: true,filter: 'agTextColumnFilter' },
    { field: 'year', sortable: true,filter: 'agTextColumnFilter' },
    { field: 'athlete', minWidth: 250,filter: 'agTextColumnFilter' },
    { field: 'sport', minWidth: 200,filter: 'agTextColumnFilter' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    resizable: true,
  };
  public groupDisplayType: RowGroupingDisplayType = 'groupRows';
  public rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never' = 'always';

  public groupRowRendererParams = {
    // puts a checkbox onto each group row
    checkbox: false,
    // puts a row dragger onto each group row
    rowDrag: false
  };

  public groupDefaultExpanded = 0;
  public rowData!: [];

  constructor(private http: HttpClient) { }

  onGridReady() {
    this.http
      .get<any>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => {

        this.rowData = data;
      });
  }
}
