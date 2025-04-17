import React from 'react';

const AcercaDe = (props) => {
    return (
        <main className='acercaDe'>
            <div>
                <h1 className="greeting">{props.greeting}</h1>
                <p>
                    Bienvenidos a <strong>Villa Pino Furniture Store</strong>, una tienda familiar ubicada en el corazón de <strong>Villa Eloísa, Santa Fe</strong>, especializada en la creación y venta de <strong>muebles de pino</strong> de alta calidad.
                </p>

                <p>
                    Nuestra pasión por la carpintería y el diseño rústico nos ha llevado a ofrecer productos duraderos, funcionales y estéticamente cálidos para todos los espacios del hogar. Cada pieza es trabajada con dedicación y cuidado artesanal, respetando la nobleza del pino como materia prima.
                </p>

                <p>
                    Creemos en el valor de lo simple, lo natural y lo hecho con amor. En Villa Pino, no solo vendemos muebles: ayudamos a construir hogares.
                </p>

                <p>
                    📍 <strong>Ubicación:</strong> Villa Eloísa, Santa Fe, Argentina
                    <br />
                    📦 Envíos disponibles a toda la región.
                </p>
            </div>
        </main>
    );
};

export default AcercaDe;
