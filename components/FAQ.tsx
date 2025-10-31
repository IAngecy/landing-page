type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Preciso integrar redes sociais agora?",
    a: "No MVP, agendamento é simulado.",
  },
  {
    q: "Posso editar o conteúdo da IA antes de inserir?",
    a: "Sim, sempre.",
  },
  {
    q: "O cliente precisa de login?",
    a: "Não, ele usa um link público por projeto.",
  },
  {
    q: "Posso testar antes?",
    a: "Use a área de DEV para explorar.",
  },
  {
    q: "O que vem a seguir?",
    a: "Integrações nativas e automações.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">FAQ</h2>
          <p className="mt-3 text-foreground/70">Perguntas rápidas para tirar dúvidas.</p>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-lg border border-foreground/10 bg-background p-6">
              <dt className="font-medium">{item.q}</dt>
              <dd className="mt-2 text-foreground/75 text-sm">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
