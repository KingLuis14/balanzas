export interface Productos {
    data:       Data;
    extensions: Extensions;
}

export interface Data {
    allProductos: AllProductos;
}

export interface AllProductos {
    nodes: Node[];
}

export interface Node {
    productos_balanzas: ProductosBalanzas;
    slug:               string;
}

export interface ProductosBalanzas {
    descripcion: string;
    descuento:   number | null;
    id:          string;
    oferta:      boolean | null;
    precio:      number;
    imagen:      Imagen;
    detalles:    Detalle[];
}

export interface Detalle {
    detalle: string;
}

export interface Imagen {
    srcSet:       string;
    mediaItemUrl: string;
    mediaDetails: MediaDetails;
}

export interface MediaDetails{
    height: number;
    width: number;
}

export interface Extensions {
    debug: Debug[];
}

export interface Debug {
    type:    string;
    message: string;
}


// localStorage

export interface LocalStorageProductsBalanzas extends Omit<ProductosBalanzas, 'imagen' | 'detalles' | 'descripcion'>{
imagen :string;
cantidad: number;
slug: string;

}