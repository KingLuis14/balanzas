import { z } from 'zod';

const phoneRegex = /^(9\d{2} \d{3} \d{3})$/;
const nameRegex = /^[a-zA-Z\s]+$/;


export const baseSchema = z.object({
    name: z
       .string()
       .min(1, 'El nombre es requerido')
       .regex(nameRegex, 'Tu nombre no debe contener números ni caracteres especiales'),
    numero: z
       .string()
       .min(1, 'El número es requerido')
       .regex(phoneRegex, 'El número debe contener solo dígitos numericos e iniciar con 9'),
    email: z.string().email('El correo electrónico no es válido'),
    mensaje: z.string().optional(),
 });

 export const schemaWithCurso = baseSchema.extend({
    curso: z.string().refine((value) => value !== '', {
       message: 'Debes seleccionar un curso',
    }),
 });