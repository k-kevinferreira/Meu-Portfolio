function About() {
  return (
    <section id="sobre" className="bg-[#f5f5f3] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">


          <div className="flex justify-center md:justify-start">

            <div className="w-[320px] h-360px rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-lg">

              <img
                src="/foto.png"
                alt="Kevin Ferreira"
                className="w-full h-full object-cover"
              />

            </div>

          </div>



          <div className="max-w-xl">

            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#24385b]">
              Conheça minha trajetória
            </span>

            <h2 className="mt-4 text-5xl font-bold tracking-[-0.03em] text-[#0f172a]">
              Sobre mim
            </h2>

            <p className="mt-8 text-[18px] leading-9 text-[#5b6475]">
              Sou estudante de Engenharia de Software e venho desenvolvendo
              projetos práticos para fortalecer minha base técnica e minha visão
              de produto. Já trabalho com HTML, CSS, JavaScript, Node.js,
              Tailwind CSS, banco de dados e integração com APIs.
            </p>

            <p className="mt-6 text-[18px] leading-9 text-[#5b6475]">
              Atualmente sigo aprimorando minhas habilidades e aprofundando
              meus estudos em React e desenvolvimento de aplicações modernas,
              responsivas e bem estruturadas. Busco constantemente evoluir e
              entregar soluções de qualidade.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#0f172a] px-4 py-2 text-sm text-[rgb(255,255,255)]">
                Proativo
              </span>
              <span className="rounded-full bg-[#0f172a] px-4 py-2 text-sm text-[rgb(255,255,255)]">
                Organizado
              </span>
              <span className="rounded-full bg-[#0f172a] px-4 py-2 text-sm text-[rgb(255,255,255)]">
                Autodidata
              </span>
              <span className="rounded-full bg-[#0f172a] px-4 py-2 text-sm text-[rgb(255,255,255)]">
                Focado em resultados
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;