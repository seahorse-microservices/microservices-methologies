
import {render, screen, fireEvent} from '@testing-library/angular'
import { CounterComponent } from './counter.component';
// import '@testing-library/jasmine-dom';
// import JasmineDOM from '@testing-library/jasmine-dom/dist';

// beforeAll(() => {
// 	jasmine.addMatchers(JasmineDOM);
// });

//import { ComponentFixture, TestBed } from '@angular/core/testing';


// describe('CounterComponent', () => {
//   let component: CounterComponent;
//   let fixture: ComponentFixture<CounterComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [CounterComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(CounterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('Counter', () => {
  it('should render counter', async () => {
    await render(CounterComponent, {
      componentProperties: {counter: 5},
    })

    expect(screen.getByText('Current Count: 5')).toBeInTheDocument();
  })

  it('should increment the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: {counter: 5},
    })

    fireEvent.click(screen.getByText('+'))

    expect(screen.getByText('Current Count: 6')).toBeTruthy();
  })
})












