import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoinicioPage } from './alumnoinicio.page';

describe('AlumnoinicioPage', () => {
  let component: AlumnoinicioPage;
  let fixture: ComponentFixture<AlumnoinicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlumnoinicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
