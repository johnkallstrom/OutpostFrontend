import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Posts } from './pages/posts/posts.component';
import { Categories } from './pages/categories/categories.component';

export const routes: Routes = [
    { path: '', component: Home, title: 'Outpost - Home' },
    { path: 'posts', component: Posts, title: 'Outpost - Posts' },
    { path: 'categories', component: Categories, title: 'Outpost - Categories' }
];
