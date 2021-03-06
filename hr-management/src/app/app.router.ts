import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { SearchComponent } from './content/search/search.component';
import { SkillComponent } from './content/Skills/skill.component';

import { ListComponent } from './content/developers/list/list.component';
import { ReadComponent } from './content/developers/read/read.component';

import { LoginComponent } from './session/login/login.component';
import { LogoutComponent } from './session/logout/logout.component';


export const router: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'developers', component: ListComponent },
    { path: 'developers/read', component: ReadComponent },
    { path: 'Skills', component: SkillComponent },

    //{ path: 'developers/:id', component: DevelopersComponent },
    //{ path: 'skill/:id', component: SkillsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);