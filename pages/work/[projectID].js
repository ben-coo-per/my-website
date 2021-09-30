import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import Head from "next/head";
import { useRouter } from "next/router";
import { ProjectPage } from "../../src/components/layout";
import { Text } from "@chakra-ui/react";
import { getProject } from "../api/getProject";
import ImageCarousel from "../../src/components/imageCarousel";

function initialState(args) {
  return {
    response: null,
    error: null,
    isLoading: true,
    ...args,
  };
}

export default function AboutPage() {
  const router = useRouter();
  const [state, setState] = useState(() => initialState());

  if (!router) {
    return (
      <div>
        <Head>
          <title>Loading...</title>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <ProjectPage
          pageTitle={router.query.projectID}
          backURL="/work"
          isLoading
        >
          <Text textStyle="body">{}</Text>
        </ProjectPage>
      </div>
    );
  }

  useEffect(() => {
    // Fetch Post from DB
    const fetchData = async () => {
      try {
        const res = await getProject(router.query.projectID);

        if (res && !res.project) {
          setState(
            initialState({
              response: res,
              isLoading: true,
            })
          );
        } else if (res) {
          setState(
            initialState({
              response: res,
              isLoading: false,
            })
          );
        } else {
          setState(
            initialState({
              error: res,
              isLoading: false,
            })
          );
        }
      } catch (error) {
        setState(
          initialState({
            error: {
              error: error.message,
            },
            isLoading: false,
          })
        );
      }
    };

    fetchData();
  }, [router]);

  if (state.isLoading) {
    return (
      <div>
        <Head>
          <title>Loading...</title>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <ProjectPage
          pageTitle={router.query.projectID}
          backURL="/work"
          isLoading
        ></ProjectPage>
      </div>
    );
  }

  if (state.error) {
    return (
      <>
        <Head>
          <title>Error</title>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <ProjectPage pageTitle="404" backURL="/work" error />
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>{state.response.project.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <ProjectPage project={state.response.project} backURL="/work">
        <Text align="center" textStyle="h3">
          {state.response.project.title}
        </Text>
        <Text align="center" textStyle="body">
          {state.response.project.date}
        </Text>
        <ImageCarousel images={state.response.project.imageGallery} />

        <ReactMarkdown
          renderers={ChakraUIRenderer()}
          source={state.response.project.markdown}
          escapeHtml={true}
        />
      </ProjectPage>
    </div>
  );
}
