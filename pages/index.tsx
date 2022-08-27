import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CorrectMyWriting from "../components/correctMyWriting";
import { UserCredential } from "firebase/auth";
import Spinner from "../components/ui/spinner";
import { useSelector } from "react-redux";
import Login from "../components/login";

const Home: NextPage = () => {
  const [userCredential, setUserCredential] = useState<UserCredential>();
  const auth = useSelector(
    (state: { auth: { isLogin: boolean } }) => state.auth.isLogin
  );
  const spinner = useSelector(
    (state: { spinner: { on: boolean } }) => state.spinner.on
  );
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
        {spinner ? <Spinner /> : auth ? <CorrectMyWriting /> : <Login />}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
