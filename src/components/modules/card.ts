export interface AvisoItem {
  id: string;
  titulo: string;
  conteudo: string;
  data: string;
}

export interface PresençaItem {
  id: string;
  rota: string;
  data: string;
  turno: string;
  motorista: string;
  situacao: string;
}