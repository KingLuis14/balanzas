const imagesSlider = [
    {
        imgName: 'balanza6',
        alt: 'imagen de about 1',
        type: ['webp'],
        get img(): string[] {
            return this.type.map((ty : string) =>{
                return `${this.imgName}.${ty}` ;
            })
        }
    },
    {
        imgName: 'balanza7',
        alt: 'imagen de about 2',
        type: ['webp'],
        get img(): string[] {
            return this.type.map((ty : string) =>{
                return `${this.imgName}.${ty}` ;
            })
        }
    },
    {
        imgName: 'balanza2',
        alt: 'imagen de banner',
        type: ['webp'],
        get img(): string[] {
            return this.type.map((ty : string) =>{
                return `${this.imgName}.${ty}` ;
            })
        }
    },
    {
        imgName: 'balanza1',
        alt: 'imagen de cta',
        type: ['webp'],
        get img(): string[] {
            return this.type.map((ty : string) =>{
                return `${this.imgName}.${ty}` ;
            })
        }
    }
] 


export default imagesSlider;