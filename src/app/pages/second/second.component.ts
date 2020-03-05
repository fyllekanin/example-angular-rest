import { Component } from '@angular/core';
import { HttpService } from 'src/app/http/http.service';

@Component({
    selector: 'app-second',
    templateUrl: 'second.component.html'
})
export class SecondComponent {
    json: string;

    constructor(httpService: HttpService) {
        httpService.get('https://reqres.in/api/products/3').subscribe(res => {
            this.json = JSON.stringify(res);
        });
    }
}
