import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CorrectMyWriting from "../components/correctMyWriting";
import { googleSignIn } from "../components/storage/firebase";
import { UserCredential } from "firebase/auth";
import ButtonLogin from "../components/ui/buttonLogin";
import Spinner from "../components/ui/spinner";

const Home: NextPage = () => {
  const [userCredential, setUserCredential] = useState<UserCredential>();
  const [spinner, setSpinner] = useState<boolean | null>(null);
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
        {userCredential ? (
          <CorrectMyWriting />
        ) : spinner ? (
          <Spinner />
        ) : (
          <>
            <h1 className={styles.title}>
              Welcome to{" "}
              <b className="animate-pulse duration-75">correct my writing!</b>
            </h1>
            <ButtonLogin
              onClick={() => googleSignIn(setUserCredential, setSpinner)}
            />
          </>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
