type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Preciso integrar redes sociais agora?",
    a: "Não, no MVP o agendamento é simulado. O agendamento real será lançado em uma fase futura.",
  },
  {
    q: "Posso editar o conteúdo gerado pela IA antes de enviar?",
    a: "Sim, sempre. Você pode editar qualquer conteúdo antes de inserir no calendário.",
  },
  {
    q: "O cliente precisa criar uma conta para aprovar?",
    a: "Não, o cliente usa um link público por projeto. Não precisa de login ou cadastro.",
  },
  {
    q: "Posso testar sem compromisso?",
    a: "Sim, o plano Starter é gratuito. Você pode começar agora mesmo.",
  },
  {
    q: "O que acontece se eu exceder a cota de posts da IA?",
    a: "Nos planos Starter e Pro, não há excedentes — a geração é bloqueada quando a cota termina. No plano Agency, excedentes opcionais podem ser configurados.",
  },
  {
    q: "Posso mudar de plano depois?",
    a: "Sim, você pode atualizar ou cancelar seu plano a qualquer momento.",
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
