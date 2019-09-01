import { NgModule } from "@angular/core";
import { Route,RouterModule } from "@angular/router";
import { HomeComponent } from 'src/Components/Home/Home.component';
import { NotFoundPageComponent } from 'src/Components/NotFoundPage/NotFoundPage.component';
const routes:Route[] = [
    {path:"home",component:HomeComponent}, 
    {path:"***",component:NotFoundPageComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}