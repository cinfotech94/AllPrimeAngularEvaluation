import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCheckboxModule, IgxDatePickerModule, IgxGridModule } from 'igniteui-angular';
import { FilteringComponent } from './filtering.component';

describe('FilteringComponent', () => {
  let component: FilteringComponent;
  let fixture: ComponentFixture<FilteringComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserAnimationsModule, IgxGridModule, IgxDatePickerModule, IgxCheckboxModule, FilteringComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
