/*const productos = [
    {
        id: '01',
        name: 'Modular',
        img: '../public/modularpino.png',
        description: 'Mueble versátil de gran capacidad, ideal para organizar y decorar tu comedor o living con estilo rústico.',
        category: 'Living',
        ofertas: false,
        price: 210000,
        stock: 20
    },
    {
        id: '02',
        name: 'Modular Simple',
        img: '../public/modularpino2.webp',
        description: 'Una versión compacta del modular tradicional, funcional y perfecta para espacios más reducidos.',
        category: 'Living',
        ofertas: false,
        price: 165000,
        stock: 10
    },
    {
        id: '03',
        name: 'Escritorio',
        img: '../public/escritoriopino.webp',
        description: 'Escritorio de pino macizo, pensado para crear un rincón de trabajo cómodo y natural en tu hogar.',
        category: 'Dormitorio',
        ofertas: false,
        price: 130000,
        stock: 30
    },
    {
        id: '04',
        name: 'Cristalero',
        img: '../public/cristaleropino.webp',
        description: 'Elegante vitrina con puertas de vidrio, ideal para exhibir vajilla, copas o decoraciones especiales.',
        category: 'Living',
        ofertas: false,
        price: 190000,
        stock: 10
    },
    {
        id: '05',
        name: 'Despensero',
        img: '../public/despensero.webp',
        description: 'Práctico mueble vertical para guardar alimentos y utensilios, ideal para optimizar la cocina.',
        category: 'Cocina',
        ofertas: false,
        price: 145000,
        stock: 15
    },
    {
        id: '06',
        name: 'Mesa',
        img: '../public/mesapino.webp',
        description: 'Mesa de comedor robusta y espaciosa, ideal para compartir grandes momentos en familia.',
        category: 'Cocina',
        ofertas: false,
        price: 170000,
        stock: 20
    },
    {
        id: '07',
        name: 'Mesa Simple Exterior',
        img: '../public/mesaSimpleExteriorPino.jpg',
        description: 'Mesa resistente y práctica para galerías o patios, hecha para disfrutar del aire libre.',
        category: 'Jardin',
        ofertas: false,
        price: 120000,
        stock: 20
    },
    {
        id: '08',
        name: 'Mueble para TV ',
        img: '../public/muebletvpino.jpg',
        description: 'Soporte funcional y estético para tu televisor, con espacio para equipos y decoración.',
        category: 'Living',
        ofertas: false,
        price: 140000,
        stock: 20
    },
    {
        id: '09',
        name: 'Silla Plegable',
        img: '../public/sillaplegablepino.jpg',
        description: 'Silla cómoda y liviana, fácil de guardar y perfecta para invitados o exteriores.',
        category: 'Jardin',
        ofertas: false,
        price: 35000,
        stock: 20
    },
    {
        id: '10',
        name: 'Mesa Circular Exterior',
        img: '../public/mesaCircularExterior.webp',
        description: 'Mesa redonda de estilo rústico, ideal para jardines y encuentros al aire libre.',
        category: 'Jardin',
        ofertas: false,
        price: 60000,
        stock: 20
    },
    {
        id: '11',
        name: 'Librería Simple',
        img: '../public/libreriaSimple.jpg',
        description: 'Estantería compacta para libros y objetos, ideal para espacios chicos o juveniles.',
        category: 'Living',
        ofertas: false,
        price: 90000,
        stock: 20
    },
    {
        id: '12',
        name: 'Librería',
        img: '../public/libreria.jpg',
        description: 'Amplia biblioteca de pino, perfecta para organizar tus libros o crear un rincón de lectura acogedor.',
        category: 'Living',
        ofertas: false,
        price: 150000,
        stock: 20
    },
    {
        id: '13',
        name: 'Juego de Sillones',
        img: '../public/juegoSillones.jpg',
        description: 'Conjunto de sillones de madera con almohadones incluidos, ideal para living o quincho.',
        category: 'Living',
        ofertas: false,
        price: 300000,
        stock: 20
    },
    {
        id: '14',
        name: 'Colchón Simple',
        img: '../public/colchonSimple.avif',
        description: 'Colchón confortable para camas de una plaza, diseñado para un buen descanso.',
        category: 'Otros',
        ofertas: false,
        price: 100000,
        stock: 20
    },
    {
        id: '15',
        name: 'Colchón Doble',
        img: '../public/colchonDoble.webp',
        description: 'Colchón de dos plazas con excelente soporte y comodidad.',
        category: 'Otros',
        ofertas: false,
        price: 180000,
        stock: 20
    },
    {
        id: '16',
        name: 'Cama Simple',
        img: '../public/camaPino.jpg',
        description: 'Cama de una plaza robusta y funcional, ideal para niños o habitaciones auxiliares.',
        category: 'Dormitorio',
        ofertas: false,
        price: 100000,
        stock: 20
    },
    {
        id: '17',
        name: 'Cama Nido Triple',
        img: '../public/camaNidoTriplePino.webp',
        description: 'Cama con dos camas ocultas debajo, perfecta para optimizar espacio en dormitorios compartidos.',
        category: 'Dormitorio',
        ofertas: false,
        price: 190000,
        stock: 20
    },
    {
        id: '18',
        name: 'Cama Nido Doble con Cajones',
        img: '../public/camaCajonesPino.jpg',
        description: 'Cama con cama auxiliar y cajones de guardado, ideal para cuartos infantiles.',
        category: 'Dormitorio',
        ofertas: false,
        price: 175000,
        stock: 20
    },
    {
        id: '19',
        name: 'Bajo Mesada Simple',
        img: '../public/bajomesadasimplepino.jpg',
        description: 'Mueble bajo para cocina, con espacio de guardado y diseño limpio.',
        category: 'Cocina',
        ofertas: false,
        price: 110000,
        stock: 20
    },
    {
        id: '20',
        name: 'Bajo Mesada',
        img: '../public/bajomesadapino.jpg',
        description: 'Versión más amplia y completa del bajo mesada, ideal para cocinas familiares.',
        category: 'Cocina',
        ofertas: false,
        price: 145000,
        stock: 20
    },
    {
        id: '21',
        name: 'Armario',
        img: '../public/armariopino.jpg',
        description: 'Ropero amplio con estantes y perchero, ideal para mantener el orden en tu dormitorio.',
        category: 'Dormitorio',
        ofertas: false,
        price: 200000,
        stock: 20
    },
    {
        id: '22',
        name: 'Aparador',
        img: '../public/aparadorpino.jpg',
        description: 'Mueble bajo con puertas y cajones, ideal para guardar vajilla o como complemento decorativo.',
        category: 'Cocina',
        ofertas: false,
        price: 160000,
        stock: 20
    },
    {
        id: '23',
        name: 'Almohadón para Sillón 1',
        img: '../public/almohadonSillon.webp',
        description: 'Almohadón de tela para acompañar nuestros sillones, brinda confort y estilo.',
        category: 'Otros',
        ofertas: false,
        price: 18000,
        stock: 20
    },
    {
        id: '24',
        name: 'Almohadón para Sillón 2',
        img: '../public/almohadonSillon2.jpg',
        description: 'Almohadón de tela para acompañar nuestros sillones, brinda confort y estilo.',
        category: 'Otros',
        ofertas: false,
        price: 18000,
        stock: 20
    }
]*/


/*export const getProductDetail = (id) => {
    return new Promise((resolve, reject) => {
        let error = false;
        let product = products.find((item) => item.id === id)
        setTimeout(() => {
            if(error) {
                reject('Error al intentar ver el detalle del producto')
            }else {
                resolve(product)
            }
        }, 2000)
    })
}*/