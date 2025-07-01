import { Especialidade } from "./especialidade.model";

export interface Funcionario {
  id: string;
  nome: string;
  tipo: 'Medico' | 'Atendente';
  crm?: string; // Opcional
  especialidade?: Especialidade; // <<--- TEM QUE ESTAR COM O '?' AQUI!
}