import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

let fixture: ComponentFixture<AppComponent>
let component: AppComponent;
let service: MainService

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [MainService, {provide: HttpClient, useVaules: ''}],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

	beforeEach(()=>{
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		service = TestBed.get(MainService)
	})

  it('ngOnInit() should be called', () => {
    spyOn(service, 'getSmokeTest').and.returnValues(of({}))
		component.ngOnInit()
  });

  it('carga()', () => {
		let param: File
		let fileName: string
    spyOn(service, 'postUploadFile').and.returnValues(of({}))
		fileName = ''
		component.carga(param);
  });
  
	it('carga()', () => {
		let param: File
		let fileName: string
    spyOn(service, 'postUploadFile').and.returnValues(of({}))
		fileName = 'txt.txt'
		component.carga(param);
  });

	it('carga() error', () => {
		let param: File
    spyOn(service, 'postUploadFile').and.returnValues(throwError('error al postear el archivo'))
		component.carga(param);
  });

	it('descarga()', () => {
		let fileName = 'txt.txt'
		spyOn(service, 'getDownload').and.returnValues(of(''))
		component.descarga(fileName);
		
  });

	it('descarga() error', () => {
		let fileName = 'txt.txt'
		spyOn(service, 'getDownload').and.returnValues(throwError('error al descargar'))
		component.descarga(fileName);
		
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('app-test-front app is running!');
  // });
});
