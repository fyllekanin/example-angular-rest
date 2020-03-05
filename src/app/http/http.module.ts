import { HttpService } from './http.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ]
})
export class HttpModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HttpModule,
            providers: [
                HttpService
            ]
        }
    }
}