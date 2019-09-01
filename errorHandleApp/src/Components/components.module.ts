import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home/Home.component';
import { NotFoundPageComponent } from './NotFoundPage/NotFoundPage.component';

@NgModule({
    declarations: [HomeComponent,NotFoundPageComponent],
    imports: [ CommonModule ],
    exports: [HomeComponent,NotFoundPageComponent],
    providers: [],
})
export class ComponentsModule {}