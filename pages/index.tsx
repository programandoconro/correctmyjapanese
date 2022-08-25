import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CorrectMyWriting from "../components/correctMyWriting";
import {
  googleSignIn,
  handleRedirectResult,
} from "../components/auth/firebase";
import { UserCredential } from "firebase/auth";

const Home: NextPage = () => {
  const [token, setToken] = useState<String>();
  const [userCredential, setUserCredential] = useState<UserCredential>();
  const [spinner, setSpinner] = useState<boolean | null>(null);
  useEffect(() => {
    handleRedirectResult(setToken, setUserCredential, setSpinner);
  }, []);
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
        {token ? (
          <CorrectMyWriting />
        ) : spinner ? (
          <div className="text-8xl text-white">SPINNER</div>
        ) : (
          <>
            <button onClick={googleSignIn}>Login with Google</button>
            <h1 className={styles.title}>
              Welcome to{" "}
              <b className="animate-pulse duration-75">correct my writing!</b>
            </h1>
          </>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
