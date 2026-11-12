import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bruno Masini | Senior IT Analyst" },
      { name: "description", content: "Portfólio de Bruno Masini, Senior IT Analyst com mais de 15 anos em infraestrutura, nuvem, automação e IA." },
      { property: "og:title", content: "Bruno Masini | Senior IT Analyst" },
      { property: "og:description", content: "Experiência em infraestrutura, operações de TI, Microsoft, automação e Inteligência Artificial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioPage />;
}
