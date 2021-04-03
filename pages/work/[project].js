import Head from "next/head";
import { useRouter } from "next/router";
import { ProjectPage } from "../../src/components/shared/layout";
import { Text } from "@chakra-ui/react";

export default function AboutPage() {
  const router = useRouter();

  if (!router) {
    return (
      <div>
        <Head>
          <title>Loading...</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProjectPage pageTitle={router.query.project} backURL="/work" isLoading>
          <Text textStyle="body">{}</Text>
        </ProjectPage>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>{router.query.project}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectPage pageTitle={router.query.project} backURL="/work">
        <Text textStyle="body">{}</Text>
      </ProjectPage>
    </div>
  );
}
