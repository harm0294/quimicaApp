import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracionElectronicaPage } from './configuracion-electronica';

@NgModule({
  declarations: [
    ConfiguracionElectronicaPage,
  ],
  entryComponents: [
    ConfiguracionElectronicaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracionElectronicaPage),
  ],
})
export class ConfiguracionElectronicaPageModule {}
