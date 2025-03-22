const products = [
    {
        id: '01',
        name: 'Modular',
        img: '../public/modularpino.png',
        description: 'lorem lorem lorem',
        category: 'Living',
        ofertas: false,
        price: 0,
        stock: 20
    },
    {
        id: '02',
        name: 'Modular',
        img: '../public/modularpino2.webp',
        description: 'lorem lorem lorem',
        category: 'Living',
        ofertas: false,
        price: 0,
        stock: 10
    },
    {
        id: '03',
        name: 'Escritorio',
        img: '../public/escritoriopino.webp',
        description: 'lorem lorem lorem',
        category: 'Otros',
        ofertas: false,
        price: 0,
        stock: 30
    },
    {
        id: '04',
        name: 'Cristalero',
        img: '../public/cristaleropino.webp',
        description: 'lorem lorem lorem',
        category: 'Living',
        ofertas: false,
        price: 0,
        stock: 10
    },
    {
        id: '05',
        name: 'Despensero',
        img: '../public/despensero.webp',
        description: 'lorem lorem lorem',
        category: 'Cocina',
        ofertas: false,
        price: 0,
        stock: 15
    },
    {
        id: '06',
        name: 'Mesa',
        img: '../public/mesapino.webp',
        description: 'lorem lorem lorem',
        category: 'Cocina',
        ofertas: false,
        price: 0,
        stock: 20
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false;
        setTimeout(() => {
            if(error) {
                reject('No hay datos')
            }
            else {
                resolve(products);
            }
        }, 3000)
    })
}

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