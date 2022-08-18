import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Corrections from "../components/corrections";
import findDifferences from "../components/findDifferences";
import InputArea from "../components/inputArea";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [studentInput, setStudentInput] = useState<string>("");
  const [teacherInput, setTeacherInput] = useState<string>("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Correct my writting</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <b className="animate-pulse duration-75">correct my writting!</b>
        </h1>
        <div className="grid gap-10 pt-10 w-screen xl:w-[1200px] px-10">
          <InputArea
            title="Student: "
            input={studentInput}
            setInput={setStudentInput}
          />
          <InputArea
            title="Sensei: "
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
