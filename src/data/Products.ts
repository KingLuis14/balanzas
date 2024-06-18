type ImageType = {
    url: string;
    type: string;
};

export const Product = [
    {
        title: 'Balanza Gramera Valtox BRD09 de 7 Kilos',
        img: {
            imgName: 'balanza5',
            alt: 'imagen de about 1',
            type: [ 'avif','webp'],
            get imagen(): ImageType[] {
                return this.type.map((ty: string) => {
                    return { url: `${this.imgName}.${ty}`, type: ty };
                })
            }
        },
        price: {
            now: 320,
            old: 380
        },
        characteristics: [
            'Marca: Valtox',
            'Modelo: BRD09',
            'Capacidad: 7 Kilos',
            'Presicion: 1 Gramos',
            'Garantia: 1 año',
        ],
        description: [
            'Balanza electronica digital gramra diseñada para cumplir con aplicaciones de pesaje rapido y de alta presicion',
            'Diseño elegante y facil de trasladar',
            'Cuenta con 1 pantallas de iluminacion LCD',
            'Rapida velocidad de retorno a cero para una mejor presicion',
            'Funcion de peso',
        ],
    },
    {
        title: 'Balanza Gramera Valtox BRD09 de 7 Kilos',
        img: {
            imgName: 'balanza4',
            alt: 'imagen de about 1',
            type: [ 'avif','webp'],
            get imagen(): ImageType[] {
                return this.type.map((ty: string) => {
                    return { url: `${this.imgName}.${ty}`, type: ty };
                })
            }
        },
        price: {
            now: 320,
            old: 380
        },
        characteristics: [
            'Marca: Valtox',
            'Modelo: BRD09',
            'Capacidad: 7 Kilos',
            'Presicion: 1 Gramos',
            'Garantia: 1 año',
        ],
        description: [
            'Balanza electronica digital gramra diseñada para cumplir con aplicaciones de pesaje rapido y de alta presicion',
            'Diseño elegante y facil de trasladar',
            'Cuenta con 1 pantallas de iluminacion LCD',
            'Rapida velocidad de retorno a cero para una mejor presicion',
            'Funcion de peso',
        ],
    },
    {
        title: 'Balanza Gramera Valtox BRD09 de 7 Kilos',
        img: {
            imgName: 'balanza3',
            alt: 'imagen de about 1',
            type: [ 'webp'],
            get imagen(): ImageType[] {
                return this.type.map((ty: string) => {
                    return { url: `${this.imgName}.${ty}`, type: ty };
                })
            }
        },
        price: {
            now: 320,
            old: 380
        },
        characteristics: [
            'Marca: Valtox',
            'Modelo: BRD09',
            'Capacidad: 7 Kilos',
            'Presicion: 1 Gramos',
            'Garantia: 1 año',
        ],
        description: [
            'Balanza electronica digital gramra diseñada para cumplir con aplicaciones de pesaje rapido y de alta presicion',
            'Diseño elegante y facil de trasladar',
            'Cuenta con 1 pantallas de iluminacion LCD',
            'Rapida velocidad de retorno a cero para una mejor presicion',
            'Funcion de peso',
        ],
    },
    
    {
        title: 'Balanza Gramera Valtox BRD09 de 7 Kilos',
        img: {
            imgName: 'balanza4',
            alt: 'imagen de about 1',
            type: [ 'avif','webp'],
            get imagen(): ImageType[] {
                return this.type.map((ty: string) => {
                    return { url: `${this.imgName}.${ty}`, type: ty };
                })
            }
        },
        price: {
            now: 320,
            old: 380
        },
        characteristics: [
            'Marca: Valtox',
            'Modelo: BRD09',
            'Capacidad: 7 Kilos',
            'Presicion: 1 Gramos',
            'Garantia: 1 año',
        ],
        description: [
            'Balanza electronica digital gramra diseñada para cumplir con aplicaciones de pesaje rapido y de alta presicion',
            'Diseño elegante y facil de trasladar',
            'Cuenta con 1 pantallas de iluminacion LCD',
            'Rapida velocidad de retorno a cero para una mejor presicion',
            'Funcion de peso',
        ],
    },
    
    {
        title: 'Balanza Gramera Valtox BRD09 de 7 Kilos',
        img: {
            imgName: 'balanza2',
            alt: 'imagen de about 1',
            type: [ 'avif','webp'],
            get imagen(): ImageType[] {
                return this.type.map((ty: string) => {
                    return { url: `${this.imgName}.${ty}`, type: ty };
                })
            }
        },
        price: {
            now: 320,
            old: 380
        },
        characteristics: [
            'Marca: Valtox',
            'Modelo: BRD09',
            'Capacidad: 7 Kilos',
            'Presicion: 1 Gramos',
            'Garantia: 1 año',
        ],
        description: [
            'Balanza electronica digital gramra diseñada para cumplir con aplicaciones de pesaje rapido y de alta presicion',
            'Diseño elegante y facil de trasladar',
            'Cuenta con 1 pantallas de iluminacion LCD',
            'Rapida velocidad de retorno a cero para una mejor presicion',
            'Funcion de peso',
        ],
    },
    
    {
        title: 'Balanza Gramera Valtox BRD09 de 7 Kilos',
        img: {
            imgName: 'balanza6',
            alt: 'imagen de about 1',
            type: [ 'webp'],
            get imagen(): ImageType[] {
                return this.type.map((ty: string) => {
                    return { url: `${this.imgName}.${ty}`, type: ty };
                })
            }
        },
        price: {
            now: 320,
            old: 380
        },
        characteristics: [
            'Marca: Valtox',
            'Modelo: BRD09',
            'Capacidad: 7 Kilos',
            'Presicion: 1 Gramos',
            'Garantia: 1 año',
        ],
        description: [
            'Balanza electronica digital gramra diseñada para cumplir con aplicaciones de pesaje rapido y de alta presicion',
            'Diseño elegante y facil de trasladar',
            'Cuenta con 1 pantallas de iluminacion LCD',
            'Rapida velocidad de retorno a cero para una mejor presicion',
            'Funcion de peso',
        ],
    },
]

