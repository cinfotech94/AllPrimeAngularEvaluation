import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from './localData';
import { IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent, IgxPaginatorComponent } from 'igniteui-angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  standalone: true,
  imports: [IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent, DatePipe, IgxPaginatorComponent]
})
export class SortingComponent implements OnInit {
  public localData: Employee[] = [];
  title = 'Sorting';

  ngOnInit(): void {
    this.localData = employeesData;
  }
}
