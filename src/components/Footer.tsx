import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1B2A] text-[#CBD5E0] text-xs py-4">
      <div className="text-center">
        &copy; {new Date().getFullYear()} Talentys. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;