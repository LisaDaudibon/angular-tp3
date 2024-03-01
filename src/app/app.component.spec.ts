import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Product } from './model/product';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should update total', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const product: Product = { id: 0, description: '', photo: '', price: 50, stock: 1, title: '' }

    expect(app.total).toBe(0);
    app.updatePrice(product)
    expect(app.total).toBe(50);
    expect(product.stock).toBe(0);
  });

  it('should not decrement when stock is equal to 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const product: Product = { id: 0, description: '', photo: '', price: 50, stock: 0, title: '' }

    expect(app.total).toBe(0);
    app.updatePrice(product)
    expect(app.total).toBe(0);
    expect(product.stock).toBe(0);
  });

  

  // it(`should have as title 'firstproject'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('firstproject 29/02/2024 app is running');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, firstproject 29/02/2024 app is running');
  // });
});
