import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CorrectMyWriting from "../components/correctMyWriting";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Correct my writing</title>
        <meta
          name="description"
          content="A place to improve your writing skills in any language"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <b className="animate-pulse duration-75">correct my writing!</b>
        </h1>
        <CorrectMyWriting />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
