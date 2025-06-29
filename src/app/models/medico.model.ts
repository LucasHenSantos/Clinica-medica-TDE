import { Especialidade } from "./especialidade.model";

export interface Medico {
  id: string;
  nome: string;
  crm : string;
  especialidade: Especialidade;
}
