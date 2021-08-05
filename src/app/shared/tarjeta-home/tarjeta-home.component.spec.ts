import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHomeComponent } from './tarjeta-home.component';

describe('TarjetaHomeComponent', () => {
  let component: TarjetaHomeComponent;
  let fixture: ComponentFixture<TarjetaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
