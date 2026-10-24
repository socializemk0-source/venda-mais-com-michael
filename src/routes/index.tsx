import { createFileRoute } from "@tanstack/react-router";
import livro from "@/assets/livro.jpg";
import diagnostico from "@/assets/diagnostico.png.asset.json";
import michael from "@/assets/michael.jpg.asset.json";
import logo from "@/assets/logo-branco.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Livro e diagnóstico de vendas | Michael Almeida" },
      { name: "description", content: "Faça o diagnóstico Os 7 Códigos da Venda ou leia o livro Vender é Minha Arte." },
      { property: "og:title", content: "Livro e diagnóstico de vendas | Michael Almeida" },
      { property: "og:description", content: "Duas formas de vender mais. Escolha por onde começar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Offer = {
  tag: string; title: string; text: string; cta: string; href: string; img: string; dark: boolean;
};

const offers: Offer[] = [
  { tag: "Livro", title: "Vender é Minha Arte", text: "Obra com 27 capítulos de especialistas em vendas. No capítulo 20, eu ensino o SPIN Selling para vender no B2B.", cta: "Conhecer o livro", href: "#", img: livro, dark: true },
  { tag: "Diagnóstico", title: "Os 7 Códigos da Venda", text: "Um guia de 7 dias para descobrir qual etapa do seu processo comercial está travando os seus resultados.", cta: "Conhecer o diagnóstico", href: "#", img: diagnostico.url, dark: false },
];

function Index() {
  return (
    <main>
      <section className="bg-grid bg-background text-foreground">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-6">
          <header className="flex items-center justify-between gap-4">
            <img src={logo} alt="Michael Almeida — Consultoria de Vendas" width={1320} height={708} className="h-14 w-auto md:h-16" />
            <span className="hidden text-sm text-muted-foreground sm:block">Treinamento de Vendas</span>
          </header>
          <h1 className="mt-12 max-w-2xl text-5xl font-extrabold leading-[0.95] md:text-7xl">
            Duas formas de vender mais. Escolha por onde começar.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Faça o diagnóstico para descobrir onde a sua venda trava ou leia o livro para aprender o método na prática.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {offers.map((o) => (
              <div key={o.title} className="rounded-sm border border-primary/60 p-1.5">
                <div className={`flex h-full flex-col gap-6 rounded-sm border-2 border-primary p-6 ${o.dark ? "bg-ink" : "bg-navy-card"}`}>
                  <div className="flex gap-5">
                    <img src={o.img} alt={`Capa de ${o.title}`} width={768} height={1024} className="h-40 w-28 shrink-0 object-cover shadow-lg" />
                    <div>
                      <p className="font-semibold text-gold">{o.tag}</p>
                      <h2 className="mt-1 text-3xl font-bold leading-tight">{o.title}</h2>
                      <p className="mt-2 text-muted-foreground">{o.text}</p>
                    </div>
                  </div>
                  <a href={o.href} className={`mt-auto block rounded-sm py-3 text-center font-display text-2xl font-bold text-ink transition-opacity hover:opacity-90 ${o.dark ? "bg-gold" : "bg-orange"}`}>
                    {o.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card text-card-foreground">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <img src={michael.url} alt="Michael Almeida de terno azul-marinho, fotografado em estúdio" width={1280} height={1920} loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover object-top" />
          <div>
            <h2 className="text-4xl font-bold">Quem é Michael Almeida</h2>
            <p className="mt-4 text-lg">
              Gerente comercial, mentor, escritor, palestrante e professor de pós-graduação em Liderança e Vendas. São 24 anos implementando processos de marketing e vendas em empresas.
            </p>
            <p className="mt-4 text-lg">
              Meu trabalho é transformar técnica de vendas em rotina simples, que o seu time consegue aplicar já na próxima reunião.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
