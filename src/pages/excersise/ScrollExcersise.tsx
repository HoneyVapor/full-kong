import React, { useEffect, useState } from 'react';
import { datos } from './datos';

type ScrollExcersiseProps = {
  tipo: string;
};

export const ScrollExcersise: React.FC<ScrollExcersiseProps> = ({ tipo }) => {
  const [datoFiltrado, setDatoFiltrado] = useState<any>('');
  let contador = 0

  useEffect(() => {
    // Filtra el objeto que coincide con el tipo
    const objetoFiltrado = datos.find((dato) => dato.tipo === tipo);

    if (objetoFiltrado) {
      // Si se encuentra un objeto, establece el estado
      setDatoFiltrado(objetoFiltrado);
    }
  }, [tipo]);

  return (
    <>
      {datoFiltrado ? (
        <div className='auxiliar'>
          {Object.keys(datoFiltrado).map((key) => {
            // Verifica si la propiedad comienza con 'url' para mostrar la imagen
            if (key.startsWith('url')) {
              contador+=1
              return (
                <div key={key} className='cont-img'>
                  <img src={datoFiltrado[key]} alt={`Imagen ${key}`} />
                </div>
              );
            }
            return null;
          })}
          <p className='contador'> ({contador})</p>
        </div>
      ) : (
        <p>Objeto no encontrado</p>
      )}
    </>
  );
};
