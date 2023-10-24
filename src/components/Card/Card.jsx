import Image from 'next/image'

export default function Card({ titulo, imagem, descricao }) {
        return (

          <div>
            <h1>{titulo}</h1>
            <Image 
            src={imagem} 
            width={300}
            height={300}
            alt={titulo} />
            <p>{descricao}</p>
          </div>
          
        );
}