import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocenteinicioPage } from './docenteinicio.page';

describe('DocenteinicioPage', () => {
  let component: DocenteinicioPage;
  let fixture: ComponentFixture<DocenteinicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocenteinicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
