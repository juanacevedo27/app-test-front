import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	status: string = ''

	constructor(
		public service: MainService
	) { }

	ngOnInit() {
		this.smokeTest()
	}

	smokeTest() {
		this.service.getSmokeTest().subscribe(
			(data) => {
				console.log(data)
				this.status = 'Conectado al servidor'
			})
	}

	carga(param) {
		let fileName: string = ''
		this.service.postUploadFile(param).subscribe(
			(res: any) => {
				fileName = res.fileName
				if (fileName) {
					this.descarga(fileName);
				}
			},
			(err) => console.log(err)
		)
	}

	descarga(fileName){
		this.service.getDownload(fileName).subscribe(
			(download: any) => {
				console.log('descarga-->', download)
				const blob = new Blob([download], { type: 'text/csv' });
				const url = window.URL.createObjectURL(blob);
				window.open(url);
			}, (err) => console.log(err)
		)
	}

}
