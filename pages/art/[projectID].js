import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import Head from "next/head";
import { useRouter } from "next/router";
import { ProjectPage } from "../../src/components/shared/layout";
import {
  Box,
  Center,
  Container,
  Image,
  Text,
  Skeleton,
  Button,
  Stack,
  Circle,
  Fade,
  IconButton,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { getProject } from "../api/getProject";
import ImageCarousel from "../../src/components/shared/imageCarousel";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProjectPage
          pageTitle={router.query.projectID}
          backURL="/art"
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
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProjectPage
          pageTitle={router.query.projectID}
          backURL="/art"
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
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProjectPage pageTitle="404" backURL="/art" error />
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>{state.response.project.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectPage project={state.response.project} backURL="/art">
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
