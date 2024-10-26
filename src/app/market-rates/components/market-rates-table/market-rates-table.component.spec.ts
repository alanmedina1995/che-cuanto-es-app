import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketRatesTableComponent } from './market-rates-table.component';

describe('MarketRatesTableComponent', () => {
  let component: MarketRatesTableComponent;
  let fixture: ComponentFixture<MarketRatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketRatesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketRatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
