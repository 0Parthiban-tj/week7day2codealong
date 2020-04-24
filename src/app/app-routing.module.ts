import{NgModule} from '@angular/core'
import{Routes,RouterModule} from '@angular/router'
import{AboutUsComponent} from './about-us/about-us.component'
import {HomeComponent} from  './home/home.component'
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes:Routes=[
    {path: '',component:HomeComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'aboutus',component:AboutUsComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutingModule{}

