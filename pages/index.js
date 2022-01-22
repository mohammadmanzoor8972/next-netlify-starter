import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ColdSwing Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <img src="/logo.PNG" />
        </div>
        <p className="description">Under Development, Comming Soon...</p>
      </main>

      <Footer />
    </div>
  );
}
