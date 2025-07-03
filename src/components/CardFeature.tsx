export function CardFeature() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-space-cadet p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user h-8 w-8 text-bittersweet" data-lov-id="src/components/Features.tsx:53:16" data-lov-name="feature.icon" data-component-path="src/components/Features.tsx" data-component-line="53" data-component-file="Features.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-bittersweet%22%7D">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2">
                </path>
                <circle cx="12" cy="7" r="4">
                </circle>
            </svg>
            </div>
            <h3 className="text-xl font-semibold text-dark-purple mb-4">
            Gestão de Colaboradores
            </h3>
            <p className="text-gray-600 leading-relaxed">
            Cadastro e gerenciamento completo de colaboradores com informações detalhadas e organizadas.
            </p>
        </div>
    )
}
