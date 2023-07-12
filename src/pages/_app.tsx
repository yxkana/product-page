import { type AppType } from "next/dist/shared/lib/utils";
import { Header } from "~/components/header";
import { Kumbh_Sans } from "next/font/google";
import { Container } from "postcss";

import "~/styles/globals.css";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={kumbh.className}>
      <div className="container flex h-screen items-center m-auto flex-col">
        <div className="h-[8%] tablet:h-[15%]">
          <Header></Header>
        </div>
        <div className="h-[90%] flex">
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  );
};

export default MyApp;
