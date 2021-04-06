import Head from "next/head";

import { DisplayPage } from "../src/components/shared/layout";
import { WorkCard } from "../src/components/shared/cards";

export default function ArtPage() {
  return (
    <div>
      <Head>
        <title>art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisplayPage pageTitle="art" backURL="/">
        {/* <WorkCard project={project} />
        <WorkCard project={project} />
        <WorkCard project={project} />
        <WorkCard project={project} />
        <WorkCard project={project} /> */}
      </DisplayPage>
    </div>
  );
}
