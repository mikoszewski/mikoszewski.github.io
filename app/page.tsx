import { MainIrga } from "@/app/Main";
import { Layout } from "@/app/content/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between body">
        <MainIrga />
      </main>
    </Layout>
  );
}
