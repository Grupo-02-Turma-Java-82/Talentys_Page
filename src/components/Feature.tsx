import { User, UserPlusIcon, ClockIcon } from "@phosphor-icons/react";
import { CardFeature } from "./CardFeature";

export function Feature() {
  return (
    <section id="features" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-purple mb-4">
            Funcionalidades Principais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra todas as ferramentas que o Talentys oferece para otimizar
            sua gestão de RH
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardFeature
            icon={<User className="h-8 w-8 text-bittersweet" />}
            title="Gestão de Colaboradores"
            description="Cadastro e gerenciamento completo de colaboradores com informações detalhadas e organizadas."
          />

          <CardFeature
            icon={<UserPlusIcon className="h-8 w-8 text-bittersweet" />}
            title="Recrutamento e Seleção"
            description="Controle total do processo de recrutamento, desde a publicação de vagas até a contratação."
          />

          <CardFeature
            icon={<ClockIcon className="h-8 w-8 text-bittersweet" />}
            title="Controle de Jornada"
            description="Registro preciso da jornada de trabalho com relatórios detalhados de produtividade."
          />
        </div>
      </div>
    </section>
  );
}
