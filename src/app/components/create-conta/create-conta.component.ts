import { Component } from '@angular/core';

@Component({
  selector: 'app-create-conta',
  templateUrl: './create-conta.component.html',
  styleUrls: ['./create-conta.component.scss']
})
export class CreateContaComponent {
  inputDisabled = false;
  
  disabledInputGerente(): void {
    this.inputDisabled = !this.inputDisabled;
  }
}
