import { CardFeature } from './CardFeature';

export function Feature() {
  return (
  <section id="funcionalidades" className="bg-gray-50 py-20 px-6">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-purple mb-4">
              Funcionalidades Principais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra todas as ferramentas que o Talentys oferece para otimizar sua gestão de RH
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardFeature></CardFeature>
        </div>
    </div>
  </section>
  )
}
