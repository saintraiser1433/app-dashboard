import { Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { ModuleComponent } from './module/module.component';
import { SubModuleComponent } from './sub-module/sub-module.component';
import { AssignSubmoduleComponent } from './assign-submodule/assign-submodule.component';
export const routes: Routes = [
    {
        path: 'app',
        component: ApplicationComponent,
    },
    {
        path: 'module',
        component: ModuleComponent,
    },
    {
        path: 'sub-module',
        component: SubModuleComponent,
    },
    {
        path: 'assign-module',
        component: AssignSubmoduleComponent,
    }
];
