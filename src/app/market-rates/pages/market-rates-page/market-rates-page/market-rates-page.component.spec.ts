import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketRatesPageComponent } from './market-rates-page.component';

describe('MarketRatesPageComponent', () => {
  let component: MarketRatesPageComponent;
  let fixture: ComponentFixture<MarketRatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketRatesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketRatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
