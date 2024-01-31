import Head from "next/head";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>TechBlog. - jsdiazp</title>
        <meta name="description" content="Tech news" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="container" className={`parent-column ${styles.container}`}>
        <Header
          brand="TechBlog."
          links={[
            { url: "#", name: "Artículos" },
            { url: "#", name: "Ser escritor" },
          ]}
        />
        <Hero />
      </div>
    </>
  );
}
