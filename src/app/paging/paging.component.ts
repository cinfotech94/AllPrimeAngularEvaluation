import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from './localData';
import { IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent, IgxPaginatorComponent } from 'igniteui-angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
  standalone: true,
  imports: [IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent, DatePipe, IgxPaginatorComponent]
})
export class PagingComponent implements OnInit {
  public localData: Employee[] = [];
  title = 'Paging';

  ngOnInit(): void {
    this.localData = employeesData;
  }
}
