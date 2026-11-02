export interface Auto {
  id: string;
  marca: string;
  modelo: string;
  anio: number;
  precio: number;
  descripcion: string;
  imagen: string;
  disponible: boolean;
  createdAt: string;
}

export interface Config {
  nombreDealer: string;
  titulo: string;
  subtitulo: string;
  whatsapp: string;
  email: string;
  telefono: string;
}
