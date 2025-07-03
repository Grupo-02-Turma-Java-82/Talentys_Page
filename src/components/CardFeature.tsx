import type { ReactNode } from "react";

interface CardFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CardFeature({ icon, title, description }: CardFeatureProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="bg-space-cadet p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-dark-purple mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
