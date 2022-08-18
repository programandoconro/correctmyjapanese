import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Corrections from "../components/corrections";
import findDifferences from "../components/findDifferences";
import InputArea from "../components/inputArea";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [studentInput, setStudentInput] = useState<string>("");
  const [teacherInput, setTeacherInput] = useState<string>("");
  useEffect(() => {
    const getPersistedData = async (route: "manuscript" | "correction") => {
      const response = await fetch(`/api/${route}`, { method: "GET" });
      const data = await response.json();
      if (route === "manuscript") {
        setStudentInput(data.manuscript);
      } else if (route === "correction") {
        setTeacherInput(data.correction);
      }
    };
    getPersistedData("manuscript");
    getPersistedData("correction");
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Correct my writting</title>
        <meta
          name="description"
          content="A place to improve your writting skills in any language"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <b className="animate-pulse duration-75">correct my writting!</b>
        </h1>
        <div className="grid gap-10 pt-10 w-screen xl:w-[1200px] px-10">
          <InputArea
            title="manuscript"
            input={studentInput}
            setInput={setStudentInput}
          />
          <InputArea
            title="correction"
            input={teacherInput}
            setInput={setTeacherInput}
          />
          <Corrections
            changes={findDifferences({
              learnerSentence: studentInput,
              teacherCorrection: teacherInput,
            })}
          />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
