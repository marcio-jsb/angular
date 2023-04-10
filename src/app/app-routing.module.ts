import { InserirUsuarioComponent } from './inserir-usuario/inserir-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'sobre', component:SobreComponent},
{path:'cadastro', component:CadastroComponent},
{path:'listar-usuario', component:ListarUsuarioComponent},
{path:'inserir-usuario',component:InserirUsuarioComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
