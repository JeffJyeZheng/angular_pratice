
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { By } from '@angular/platform-browser';
import { TitleComponent } from './title/title.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let target: AppComponent;
  let debugElememt: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          AppComponent,
          TitleComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('判斷 title', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should appear app-title', () => {
        debugElememt = fixture.debugElement.query(By.css('app-title')).nativeElement;
        expect(debugElememt).toBeTruthy();
    });
  });

  describe('判斷attribute placeholder', () => {

    it('attribute placeholder', () => {
      component.inputHint = 'fake';
      fixture.detectChanges();
      debugElememt = fixture.debugElement.query(By.css('.new-todo')).nativeElement as HTMLElement;
      expect(debugElememt.getAttribute('placeholder')).toBe('fake');

    });

    it('attribute placehoder class', () => {
      target = new AppComponent();
      expect(target.inputHint).toBe('What needs to be done?');
    });
  });

});
