import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocentemenuPage } from './docentemenu.page';

describe('DocentemenuPage', () => {
  let component: DocentemenuPage;
  let fixture: ComponentFixture<DocentemenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocentemenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
