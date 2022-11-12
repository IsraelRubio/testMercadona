export interface Producto {
  id: number,
  nombre: string,
  precio: number,
  formato: string,
  marca: string,
}

export const ProductoFields: string[] = [
  'Nombre',
  'Precio',
  'Formato',
  'Marca'
];
