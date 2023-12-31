import type { NextPage } from "next";
import Head from "next/head";
import Spinner from "../components/ui/spinner";
import { useAppSelector } from "../redux/hooks";
import Login from "../components/login";
import Dashboard from "../components/dashboard";
import { logAnalyticsEvent, startGoogleAnalytics } from "../storage/firebase";
import { useEffect } from "react";

const Home: NextPage = () => {
  const auth = useAppSelector((state) => state.auth.isLogin);
  const spinner = useAppSelector((state) => state.spinner.on);

  useEffect(() => {
    startGoogleAnalytics();
    logAnalyticsEvent();
  }, []);

  return (
    <div>
      <Head>
        <title>Correct my Japanese</title>
        <meta
          name="description"
          content="A place to improve your writing Japanese language skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{spinner ? <Spinner /> : auth ? <Dashboard /> : <Login />}</main>
    </div>
  );
};

export default Home;
