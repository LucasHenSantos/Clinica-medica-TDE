import { Component } from '@angular/core';

@Component({
  selector: 'app-convenio-adicionar',
  templateUrl: './convenio-adicionar.component.html',
  styleUrls: ['./convenio-adicionar.component.css']
})
export class ConvenioAdicionarComponent {

  convenio = {
    nome: '',
    cnpj: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Convênio cadastrado:', this.convenio);
      alert('Convênio cadastrado com sucesso!');
      form.resetForm();
    }
  }
}
