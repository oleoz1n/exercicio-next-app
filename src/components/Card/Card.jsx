export default function Card() {

    const Card = ({ titulo, imagem, descricao }) => {
        return (

          <div className="card">
            <img src={imagem} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{descricao}</p>
          </div>
          
        );
      };
}