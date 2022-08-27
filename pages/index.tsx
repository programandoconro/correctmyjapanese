import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CorrectMyWriting from "../components/correctMyWriting";
import { googleSignIn, signOutGoogle } from "../components/storage/firebase";
import { UserCredential } from "firebase/auth";
import ButtonLogin from "../components/ui/buttonLogin";
import Spinner from "../components/ui/spinner";
import Header from "../components/header";

const Home: NextPage = () => {
  const [userCredential, setUserCredential] = useState<UserCredential>();
  const [spinner, setSpinner] = useState<boolean | null>(null);
  const handleLogout = () => {
    signOutGoogle();
    setUserCredential(undefined);
  };
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

      <main>
        {userCredential ? (
          <div className="grid w-full h-screen">
            <Header logOut={handleLogout} />
            <CorrectMyWriting />
          </div>
        ) : spinner ? (
          <div className={styles.main}>
            <Spinner />
          </div>
        ) : (
          <div className={styles.main}>
            <h1 className={styles.title}>
              Welcome to{" "}
              <b className="animate-pulse duration-75">correct my writing!</b>
            </h1>
            <ButtonLogin
              onClick={() => googleSignIn(setUserCredential, setSpinner)}
            />
          </div>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
