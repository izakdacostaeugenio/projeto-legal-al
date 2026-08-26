import { createContext, type PropsWithChildren, useContext, useState } from "react";

const TemaContext = createContext<{
  amarelo: boolean;
  alternarTema: () => void;
} | null>(null);

function Tema({ children }: PropsWithChildren) {
  const [amarelo, setAmarelo] = useState<boolean>(false);

  return (
    <TemaContext.Provider
      value={{
        amarelo,
        alternarTema: () => setAmarelo((temaAtual) => !temaAtual),
      }}
    >
      <div className={amarelo ? "tema-amarelo" : "tema-normal"}>{children}</div>
    </TemaContext.Provider>
  );
}

export function BotaoTema() {
  const tema = useContext(TemaContext);

  if (!tema) {
    throw new Error("BotaoTema precisa estar dentro de Tema");
  }

  return (
    <button type="button" className="btn btn-warning" onClick={tema.alternarTema}>
      {tema.amarelo ? "voltar ao normal" :"trocar tema" }
    </button>
  );
}

export default Tema;