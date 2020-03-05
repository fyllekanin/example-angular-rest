import { HttpService } from './../../http/http.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-first',
    templateUrl: 'first.component.html'
})
export class FirstComponent {

    json: string;

    constructor(httpService: HttpService) {
        httpService.get('https://reqres.in/api/users?page=2').subscribe(res => {
            this.json = JSON.stringify(res);
        });
    }
}
