import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { MainService } from './main.service';
import { environment } from 'src/environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('MainService', () => {
  let service: MainService;
	let httpTestingController: HttpTestingController
	let url_back: string = environment.url

  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [MainService],
			schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
		});
		httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MainService);
  });

	// Arrange
	// Act
	// Assert
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('getSmokeTest()', () =>{
		service.getSmokeTest().subscribe();
		const req = httpTestingController.expectOne(url_back)
	})

	it('postUploadFile()', () =>{
		const file = new File(['data'], 'prueba.txt', {type: 'text/plain'});
		service.postUploadFile(file).subscribe();
		const req = httpTestingController.expectOne(url_back + '/upload');
		req.flush({})
	})
	
	it('getDownload()', () =>{
		const id = 'file.txt'
		service.getDownload(id).subscribe()
		const req = httpTestingController.expectOne(url_back + '/download/' +id);
		req.flush({})
	})
});
