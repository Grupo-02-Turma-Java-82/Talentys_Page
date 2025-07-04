export function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-oxford-blue text-white px-6 py-4">
      <h1 className="font-bold text-2xl">Talentys</h1>

      <div className="flex justify-center items-center gap-6">
        <a
          className="text--base text-gray-300 font-medium hover:underline cursor-pointer"
          href="#features"
        >
          Funcionalidades
        </a>

        <a
          className="text--base text-gray-300 font-medium hover:underline cursor-pointer"
          href="#demonstration"
        >
          Demonstração
        </a>
      </div>
    </nav>
  );
}
