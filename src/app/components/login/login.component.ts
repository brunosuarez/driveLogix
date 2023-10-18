import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true; 
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  fazerLogin() {
    const email = this.email.trim();
    const senha = this.senha.trim();

    const usuariosString = localStorage.getItem('usuarios');
    const usuarios = this.parseUsuarios(usuariosString);

    console.log('Usuários:', usuarios);

    const usuario = this.encontrarUsuario(usuarios, email, senha);

    console.log('Usuário encontrado:', usuario);

    if (usuario) {
      alert('Login bem-sucedido!');
      this.router.navigate(['/home']);
    } else {
      alert('Credenciais de login incorretas.');
    }
  }

  encontrarUsuario(usuarios: any[], email: string, senha: string) {
    return usuarios.find((u: any) => u.email === email && u.senha === senha);
  }

  parseUsuarios(usuariosString: string | null): any[] {
    try {
      if (usuariosString) {
        const jsonWithBrackets = "[" + usuariosString.replace(/}{/g, '},{') + "]";
        return JSON.parse(jsonWithBrackets);
      }
    } catch (error) {
      console.error('Erro ao analisar JSON do localStorage:', error);
    }
    return [];
  }
  
}
