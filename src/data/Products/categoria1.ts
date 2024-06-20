type ImageType = {
    url: string;
    type: string;
};

export const categoria1 = [
    {
        title: 'Balanza De Plataforma e-Accura SB51 De 200 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
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
        title: 'Balanza A Prueba de Agua T-Scale T28 de 15 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
        img: {
            imgName: 'balanza1',
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
        title: 'Balanza De Plataforma e-Accura PQ2 De 100 Kilos',
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
        title: 'Balanza De Plataforma e-Accura SB51 De 200 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
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
        title: 'Balanza A Prueba de Agua T-Scale T28 de 15 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
        img: {
            imgName: 'balanza1',
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
        title: 'Balanza De Plataforma e-Accura PQ2 De 100 Kilos',
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
        title: 'Balanza De Plataforma e-Accura SB51 De 200 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
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
        title: 'Balanza A Prueba de Agua T-Scale T28 de 15 Kilos',
        get url() {
            return this.title.toLowerCase().replace(/ /g, '-');
        },
        img: {
            imgName: 'balanza1',
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
        title: 'Balanza De Plataforma e-Accura PQ2 De 100 Kilos',
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

