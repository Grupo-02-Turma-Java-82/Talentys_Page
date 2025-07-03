export function Footer() {
  return (
    <footer className="flex justify-center items-center bg-oxford-blue text-white text-xs py-8">
      <div className="text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Talentys. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
