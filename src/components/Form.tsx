import { useState } from "react";
import { Button } from "./Button";

export function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    telefone: "",
    foto: "",
    curriculo: "",
  });

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  }

  function enviarFormulario(e: React.FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      alert("Colaborador cadastrado com sucesso!");
      setFormulario({
        nome: "",
        email: "",
        telefone: "",
        foto: "",
        curriculo: "",
      });
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div
      id="demonstration"
      className="min-h-screen bg-space-cadet flex items-center justify-center px-4"
    >
      <div className="max-w-4xl w-full ">
        <div className="text-center mb-20">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Cadastre um Colaborador (Demonstração)
          </h1>
          <p className="text-white text-xl max-w-xl mx-auto font-medium">
            Veja como é simples adicionar um novo talento à sua equipe. Este é
            um formulário visual e não armazena dados.
          </p>
        </div>
        <form
          onSubmit={enviarFormulario}
          className="rounded-xl shadow-md p-12 space-y-6 mx-auto bg-white"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Nome Completo
              </label>
              <input
                name="nome"
                type="text"
                placeholder="Digite o nome completo"
                value={formulario.nome}
                onChange={atualizarEstado}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                E-mail Corporativo
              </label>
              <input
                name="email"
                type="email"
                placeholder="usuario@empresa.com"
                value={formulario.email}
                onChange={atualizarEstado}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input
                name="telefone"
                type="text"
                placeholder="(11) 99999-9999"
                value={formulario.telefone}
                onChange={atualizarEstado}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                URL da Foto de Perfil
              </label>
              <input
                name="foto"
                type="text"
                placeholder="https://exemplo.com/foto.jpg"
                value={formulario.foto}
                onChange={atualizarEstado}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              URL do Currículo
            </label>
            <input
              name="curriculo"
              type="text"
              placeholder="https://exemplo.com/curriculo.pdf"
              value={formulario.curriculo}
              onChange={atualizarEstado}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <Button type="submit" className="mx-auto" isLoading={isLoading}>
            Adicionar Colaborador
          </Button>
        </form>
      </div>
    </div>
  );
}
