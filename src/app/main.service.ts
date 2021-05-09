import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
	public url_back: string = environment.url

  constructor( 
		private _http: HttpClient
	) {}

	public getSmokeTest(){
		return this._http.get(this.url_back);
	}

	public postUploadFile(file: File){
		const formData: FormData = new FormData(); 
		formData.append('file', file[0]); 
		return this._http.post(`${this.url_back}/upload`, formData);
	}

	public getDownload(id: string){
		return this._http.get(`${this.url_back}/download/${id}`, {responseType: 'text'});
	}
}
