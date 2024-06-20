type ImageType = {
    url: string;
    type: string;
};

export const categoria2 = [
    {
        title: 'Balanza Comercial Kamely ACS-A de 40 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
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
            now: 700,
            old: 780
        },
        characteristics: [
            'Marca: e-Accura.',
            'Modelo: SB51.',
            'Capacidad: 200 Kilos.',
            'Precisión: 20 Gramos.'
        ],
        description: [
            'Balanza de plataforma para trabajo extremo y larga duración',
            'Plataforma diseñada para trabajo continuo y pesado.',
            'Balanza fabricada en aluminio inyectado macizo.',
            'Acabado de la balanza con pintura al horno.',
            'Visor giratorio 360° de gran calidad.',
        ],
    },
    {
        title: 'Balanza Comercial Patrick’s ACS-826T de 30 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
        img: {
            imgName: 'balanza7',
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
            'Marca: e-Accura.',
            'Modelo: SB51.',
            'Capacidad: 200 Kilos.',
            'Precisión: 20 Gramos.'
        ],
        description: [
            'Balanza de plataforma para trabajo extremo y larga duración',
            'Plataforma diseñada para trabajo continuo y pesado.',
            'Balanza fabricada en aluminio inyectado macizo.',
            'Acabado de la balanza con pintura al horno.',
            'Visor giratorio 360° de gran calidad.',
        ],
    },
    {
        title: 'Balanza Comercial Kalery ACS 826 de 30 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
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
            'Marca: e-Accura.',
            'Modelo: SB51.',
            'Capacidad: 200 Kilos.',
            'Precisión: 20 Gramos.'
        ],
        description: [
            'Balanza de plataforma para trabajo extremo y larga duración',
            'Plataforma diseñada para trabajo continuo y pesado.',
            'Balanza fabricada en aluminio inyectado macizo.',
            'Acabado de la balanza con pintura al horno.',
            'Visor giratorio 360° de gran calidad.',
        ],
    },
    {
        title: 'Balanza Comercial Kamely ACS-A de 40 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
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
            now: 700,
            old: 780
        },
        characteristics: [
            'Marca: e-Accura.',
            'Modelo: SB51.',
            'Capacidad: 200 Kilos.',
            'Precisión: 20 Gramos.'
        ],
        description: [
            'Balanza de plataforma para trabajo extremo y larga duración',
            'Plataforma diseñada para trabajo continuo y pesado.',
            'Balanza fabricada en aluminio inyectado macizo.',
            'Acabado de la balanza con pintura al horno.',
            'Visor giratorio 360° de gran calidad.',
        ],
    },
    {
        title: 'Balanza Comercial Patrick’s ACS-826T de 30 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
        img: {
            imgName: 'balanza7',
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
            'Marca: e-Accura.',
            'Modelo: SB51.',
            'Capacidad: 200 Kilos.',
            'Precisión: 20 Gramos.'
        ],
        description: [
            'Balanza de plataforma para trabajo extremo y larga duración',
            'Plataforma diseñada para trabajo continuo y pesado.',
            'Balanza fabricada en aluminio inyectado macizo.',
            'Acabado de la balanza con pintura al horno.',
            'Visor giratorio 360° de gran calidad.',
        ],
    },
    {
        title: 'Balanza Comercial Kalery ACS 826 de 30 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
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
            'Marca: e-Accura.',
            'Modelo: SB51.',
            'Capacidad: 200 Kilos.',
            'Precisión: 20 Gramos.'
        ],
        description: [
            'Balanza de plataforma para trabajo extremo y larga duración',
            'Plataforma diseñada para trabajo continuo y pesado.',
            'Balanza fabricada en aluminio inyectado macizo.',
            'Acabado de la balanza con pintura al horno.',
            'Visor giratorio 360° de gran calidad.',
        ],
    }
]

