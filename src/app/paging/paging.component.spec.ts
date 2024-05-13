import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCheckboxModule, IgxDatePickerModule, IgxGridModule } from 'igniteui-angular';
import { PagingComponent } from './paging.component';

describe('PagingComponent', () => {
  let component: PagingComponent;
  let fixture: ComponentFixture<PagingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserAnimationsModule, IgxGridModule, IgxDatePickerModule, IgxCheckboxModule, PagingComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
