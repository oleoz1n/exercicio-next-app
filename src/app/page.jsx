import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";

export default function Home() {
    return (
        <div className="h-screen grid grid-rows-[1fr,10fr,1fr]">
            <Cabecalho />
            <main className="flex flex-col h-100 justify-center items-center">
                <h1>Conheça a nossa loja!</h1>
                <p>
                    Seja bem-vindo à nossa loja de roupas, onde a moda encontra
                    a sua personalidade.
                </p>
            </main>
            <Rodape/>
        </div>
    );
}
