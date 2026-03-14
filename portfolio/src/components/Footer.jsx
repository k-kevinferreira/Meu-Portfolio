import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-[#5b6475] text-sm">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/k-kevinferreira"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#24385b] hover:underline hover:text-[#0f172a] transition"
          >
            Kevin Ferreira
          </a>
          . Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">

          <a
            href="https://github.com/k-kevinferreira"
            target="_blank"
            rel="noreferrer"
            className="text-[#5b6475] hover:text-[#24385b] transition"
          >
            <Github size={20} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-[#5b6475] hover:text-[#24385b] transition"
          >
            <Linkedin size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;