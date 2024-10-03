import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
 
    {path: '', component: WelcomePageComponent},     
    {path: 'post', component: PostComponent}
];
