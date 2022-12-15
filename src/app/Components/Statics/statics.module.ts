import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './Header/header/header.module';
import { MenuModule } from './Menu/menu/menu.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './Menu/menu/menu.component';
import { HeaderComponent } from './Header/header/header.component';

@NgModule({
	declarations: [
		FooterComponent,
	],
	imports: [
		CommonModule,
		HeaderModule,
		MenuModule
	],
	exports: [
		MenuComponent,
		FooterComponent,
		HeaderComponent
	]
})
export class StaticsModule { }
