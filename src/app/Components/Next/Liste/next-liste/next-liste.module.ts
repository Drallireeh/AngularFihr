import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextListeComponent } from './next-liste.component';
import { NextLigneComponent } from '../next-ligne/next-ligne.component'

@NgModule({
  declarations: [
    NextListeComponent,
    NextLigneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
		NextListeComponent,
    NextLigneComponent
	]
})
export class NextListeModule { }
