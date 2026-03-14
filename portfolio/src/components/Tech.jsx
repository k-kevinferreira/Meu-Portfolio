import {
  Globe,
  Wind,
  Code,
  Server,
  Database,
  Plug,
  Braces,
  Atom
} from "lucide-react";

function Tech() {
  const techs = [
    { nome: "HTML", icon: <Globe size={28} /> },
    { nome: "CSS", icon: <Wind size={28} /> },
    { nome: "JavaScript", icon: <Code size={28} /> },
    { nome: "Node.js", icon: <Server size={28} /> },
    { nome: "Tailwind ", icon: <Braces size={28} /> },
    { nome: "Banco de Dados", icon: <Database size={28} /> },
    { nome: "APIs", icon: <Plug size={28} /> },
    { nome: "React", icon: <Atom size={28} />, studying: true }
  ];

  return (
    <section id="tecnologias" className="bg-[#f5f5f3] py-28">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-sm tracking-[0.25em] text-[#24385b] uppercase">
            Stack Técnica
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0f172a]">
            Tecnologias
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {techs.map((tech, index) => (

            <div
              key={index}
              className="relative bg-white border border-[#e5e7eb] rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition"
            >

              {tech.studying && (
                <span className="absolute top-3 right-3 text-xs bg-[#e7e7e5] text-[#24385b] px-2 py-1 rounded-full">
                  Estudando
                </span>
              )}

              <div className="text-[#24385b] mb-3">
                {tech.icon}
              </div>

              <span className="text-[#0f172a] font-medium">
                {tech.nome}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Tech;