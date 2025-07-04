import { Form } from "./Form";

export function Demonstration() {
  return (
    <div
      id="demonstration"
      className="min-h-screen bg-space-cadet flex flex-col items-center justify-center px-4 py-12"
    >
      <div className="text-center mb-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Cadastre um Colaborador (Demonstração)
        </h1>
        <p className="text-white text-xl max-w-xl mx-auto font-medium">
          Veja como é simples adicionar um novo talento à sua equipe. Este é um
          formulário visual e não armazena dados.
        </p>
      </div>
      <Form />
    </div>
  );
}
