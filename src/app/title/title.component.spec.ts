import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';
import { By } from '@angular/platform-browser';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it ('檢查component標題必須是todos', () => {
    expect(component.title).toBe('todos');
  });

  it('檢查 getTitle() return is todos', () => {
    const title = component.getTitle();
    expect(title).toBe('todos');
  });

  // validate HTML
  it ('檢查html<h1></h1>getTitle()', () => {
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(element.textContent).toBe('todos');
  });

});
