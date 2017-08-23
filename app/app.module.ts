import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { CostModule } from "./tabs/cost/cost.module";

import { TabsComponent } from "./tabs/tabs.component";
import { CostsComponent } from "./tabs/cost/costs.component";
import { LoginComponent} from "./login/login.component";
import { RegisterComponent} from "./register/register.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CostModule
    ],
    declarations: [
        AppComponent,
        TabsComponent,
        CostsComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
