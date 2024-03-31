import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component' 
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

export const routes: Routes = [
    {
        path:'',
        title:'Home Page',
        component: HomeComponent,
    },
    {
        path:'products',
        title:'Pruduct Page',
        component: ProductCrudComponent,
    },
    {
        path:'products/create',
        title:'Create Page',
        component: ProductCreateComponent,
    },
    {
        path:'products/update/:id',
        title:'Update Page',
        component: ProductUpdateComponent,
    },
    {
        path:'products/delete/:id',
        title:'Delete Page',
        component: ProductDeleteComponent
    }


    
];
