import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Swal from "sweetalert2";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwvrqbvg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem.");
      }

      await Swal.fire({
        icon: "success",
        title: "Mensagem enviada!",
        text: "Recebi seu contato e vou responder em breve.",
        confirmButtonText: "Fechar",
        confirmButtonColor: "#24385b",
        background: "#ffffff",
        color: "#0f172a",
      });

      form.reset();
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Erro no envio",
        text: "Nao foi possivel enviar a mensagem. Tente novamente.",
        confirmButtonText: "Fechar",
        confirmButtonColor: "#24385b",
        background: "#ffffff",
        color: "#0f172a",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="py-20 bg-[#f5f5f3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0f172a]">Contato</h2>
          <p className="text-[#5b6475] mt-2">
            Interessado em trabalhar comigo ou discutir um projeto?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-[#24385b]" />
              <span className="text-[#0f172a]">k.kevinferreira@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Github className="text-[#24385b]" />
              <a
                href="https://github.com/k-kevinferreira"
                target="_blank"
                rel="noreferrer"
                className="text-[#0f172a] hover:text-[#24385b] transition"
              >
                github.com/k-kevinferreira
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Linkedin className="text-[#24385b]" />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[#0f172a] hover:text-[#24385b] transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-sm space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#24385b]"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#24385b]"
            />

            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows="5"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#24385b]"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#24385b] text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
