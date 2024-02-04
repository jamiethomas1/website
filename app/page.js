import PortfolioLayout from "./layouts/portfolioLayout";
import Hero from "./ui/hero"

export default function Home() {
  return (
    <main>
      <PortfolioLayout>
        <Hero />
      </PortfolioLayout>
    </main>
  );
}
