function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-[#f5f5f3]"
    >
      <div className="max-w-6xl mx-auto w-full px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full bg-[#e7e7e5] px-4 py-2 text-sm font-medium text-[#24385b]">
              Engenharia de Software
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-[0.95] tracking-[-0.03em] text-[#0f172a]">
              Transformando
              <br />
              ideias em soluções
              <br />
              <span className="text-[#24385b]">digitais</span>
            </h1>

            <p className="mt-8 text-[18px] leading-9 text-[#5b6475] max-w-lg">
              Sou estudante de Engenharia de Software com foco em desenvolvimento
              web, criando projetos práticos e evoluindo constantemente em
              tecnologias modernas para construir soluções profissionais.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-420px rounded-2xl bg-[#0f172a] text-white p-8 font-mono text-sm shadow-lg">

              {`const developer = {
  name: "Kevin Ferreira",
  role: "Software Engineering Student",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React",
    "APIs"
  ]
}`}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;