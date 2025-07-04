import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

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
    <form
      onSubmit={enviarFormulario}
      className="rounded-xl shadow-md p-12 space-y-6 mx-auto bg-white"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          name="nome"
          legend="Nome Completo"
          placeholder="Digite o nome completo"
          value={formulario.nome}
          onChange={atualizarEstado}
          required
        />

        <Input
          name="email"
          type="email"
          legend="E-mail Corporativo"
          placeholder="usuario@empresa.com"
          value={formulario.email}
          onChange={atualizarEstado}
          required
        />
        <Input
          name="telefone"
          type="tel"
          legend="Telefone"
          placeholder="(11) 99999-9999"
          value={formulario.telefone}
          onChange={atualizarEstado}
          required
        />
        <Input
          name="foto"
          legend="URL da Foto de Perfil"
          placeholder="https://exemplo.com/foto.jpg"
          value={formulario.foto}
          onChange={atualizarEstado}
          required
        />
      </div>

      <Input
        name="curriculo"
        legend="URL do Currículo"
        placeholder="https://exemplo.com/curriculo.pdf"
        value={formulario.curriculo}
        onChange={atualizarEstado}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2"
      />

      <Button type="submit" className="mx-auto" isLoading={isLoading}>
        Adicionar Colaborador
      </Button>
    </form>
  );
}
