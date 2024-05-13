import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from './localData';
import { IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent, IgxPaginatorComponent, IgxDatePickerComponent } from 'igniteui-angular';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss'],
  standalone: true,
  imports: [IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent, DatePipe, IgxPaginatorComponent, FormsModule, IgxDatePickerComponent]
})
export class EditingComponent implements OnInit {
  public localData: Employee[] = [];
  title = 'Editing';

  ngOnInit(): void {
    this.localData = employeesData;
  }
}
