import Head from "next/head";

import { DisplayPage } from "../src/components/shared/layout";
import { WorkCard } from "../src/components/shared/cards";

const project = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  name: "Herd",
  link: "work/herd",
  tag: [{ name: "art" }],
  description: "Herd is a great thing and everyone should use it.",
  year: "2020 - Present",
};

export default function ArtPage() {
  return (
    <div>
      <Head>
        <title>art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisplayPage pageTitle="Art" backURL="/">
        <WorkCard project={project} />
        <WorkCard project={project} />
        <WorkCard project={project} />
        <WorkCard project={project} />
        <WorkCard project={project} />
      </DisplayPage>
    </div>
  );
}
