import BaseLayout from "../_layouts/BaseLayout";
import Hero from "../_components/Hero";

export default function Home() {
  return (
    <main>
      <BaseLayout>
        <div className="background" />
        <Hero />
      </BaseLayout>
    </main>
  );
}
