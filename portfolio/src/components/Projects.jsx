import { Github, ExternalLink } from "lucide-react";

function Projects() {
  const projetos = [
    {
      titulo: "Sistema de Estética Automotiva",
      descricao:
        "Sistema administrativo em desenvolvimento com dashboard, autenticação, banco de dados e estrutura voltada para gestão operacional.",
      tech: ["JavaScript", "Node.js", "Banco de Dados", "Dashboard"],
      status: "Em andamento",
      demo: "#",
      github: "",
      imagem: "/estetica.png"
    },
    {
      titulo: "MD Control",
      descricao:
        "Sistema de controle para farmácia com autenticação, integração com banco de dados e regras administrativas no back-end.",
      tech: ["JavaScript", "Node.js", "Autenticação", "Banco de Dados"],
      status: "Em andamento",
      demo: "#",
      github: "https://github.com/robertdouglasaimon/projeto-medcontrol",
      imagem: "/med-control.png"
    },
    {
      titulo: "Mottik",
      descricao:
        "Projeto para marcenaria de alto padrão com proposta visual mais refinada e foco em apresentação profissional do negócio.",
      tech: ["HTML", "CSS", "JS"],
      status: "Publicado",
      demo: "https://mottik.vercel.app/",
      github: "https://github.com/k-kevinferreira/Mottik",
      imagem: "/mottik.png"
    },
    {
      titulo: "VW Garagem",
      descricao:
        "Página de carros focada em Volkswagen para entusiastas, criada com potencial para evoluir para um blog automotivo mais completo e escalável. O projeto inicial foi concluído no começo da minha trajetória, quando eu ainda estava desenvolvendo mais conhecimento técnico.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Publicado",
      demo: "https://vwblog-ten.vercel.app/",
      github: "",
      imagem: "/vw.png"
    },
    {
      titulo: "AirTech Store",
      descricao:
        "Loja virtual com interface desenvolvida em HTML, CSS e JavaScript, focada em apresentação de produtos de tecnologia.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Publicado",
      demo: "https://k-kevinferreira.github.io/AirTech-Store/",
      github: "https://github.com/k-kevinferreira/AirTech-Store",
      imagem: "/Air-tech.png"
    },
    {
      titulo: "Dt Money",
      descricao:
        "Projeto prático de estudo com foco em estrutura visual, organização de interface e evolução no front-end.",
      tech: ["HTML"],
      status: "Publicado",
      demo: "https://k-kevinferreira.github.io/Dt-Money/",
      github: "https://github.com/k-kevinferreira/Dt-Money",
      imagem: "/dt-money.png"
    },
    {
      titulo: "Frontend Mentor",
      descricao:
        "Desafio de front-end do início da trajetória, importante para mostrar evolução, atenção a layout e prática com interfaces.",
      tech: ["CSS"],
      status: "Publicado",
      demo: "https://k-kevinferreira.github.io/Frontend-Mentor/",
      github: "https://github.com/k-kevinferreira/Frontend-Mentor",
      imagem: "/frontMentor.png"
    },
    {
      titulo: "Login",
      descricao:
        "Tela de login desenvolvida com HTML e CSS, com foco em estrutura visual, estilização e prática de interface.",
      tech: ["HTML", "CSS"],
      status: "Publicado",
      demo: "https://k-kevinferreira.github.io/Login/",
      github: "https://github.com/k-kevinferreira/Login",
      imagem: "/login.png"
    }
  ];

  return (
    <section id="projetos" className="bg-[#ffffff] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.25em] text-[#24385b] uppercase">
            Portfólio
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0f172a]">
            Projetos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projetos.map((proj, index) => (
            <div
              key={index}
              className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {proj.demo && proj.demo !== "#" ? (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden"
                >
                  <img
                    src={proj.imagem}
                    alt={proj.titulo}
                    className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              ) : (
                <div className="h-40 bg-[#e7e7e5] flex items-center justify-center text-[#9ca3af] font-medium">
                  <img
                    src={proj.imagem}
                    alt={proj.titulo}
                    className="h-40 w-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-center gap-3 mb-3">
                  <h3 className="font-semibold text-[#0f172a]">
                    {proj.titulo}
                  </h3>

                  <span
                    className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                      proj.status === "Publicado"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="text-sm text-[#5b6475] mb-4 leading-6">
                  {proj.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#f1f5f9] text-[#475569] px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm border border-[#24385b] text-[#24385b] px-4 py-2 rounded-full hover:bg-[#24385b] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}

                  {proj.demo && proj.demo !== "#" && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm bg-[#24385b] text-white px-4 py-2 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;