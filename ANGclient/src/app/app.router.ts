/*
Import
*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ChatPageComponent } from "./pages/chat-page/chat-page.component";
import { ConversationPageComponent } from "./pages/conversation-page/conversation-page.component";

//

/*
Definition
*/
const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
      path: 'register',
      component: RegisterPageComponent
    },
    {
      path: 'chat',
      component: ChatPageComponent
    },
    {
      path: 'conversation/:id',
      component: ConversationPageComponent
    }
]
//

/*
Export
*/
export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes)
