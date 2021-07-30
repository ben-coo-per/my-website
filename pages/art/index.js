import React, { useEffect, useState } from "react";
import Head from "next/head";

import { DisplayPage } from "../../src/components/shared/layout";
import { WorkCard } from "../../src/components/shared/cards";
import { getOkay } from "../api/getProject";

function initialState(args) {
  return {
    response: null,
    error: null,
    isLoading: true,
    ...args,
  };
}

export default function WorkPage() {
  const [state, setState] = useState(() => initialState());

  useEffect(() => {
    // Fetch Post from DB
    const fetchData = async () => {
      try {
        const res = await getOkay();

        if (res) {
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
  }, []);

  if (state.isLoading) {
    return (
      <>
        <Head>
          <title>loading...</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <DisplayPage pageTitle="other stuff" backURL="/" isLoading />
      </>
    );
  }

  if (state.error) {
    return (
      <>
        <Head>
          <title>junk</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <DisplayPage pageTitle="other stuff" backURL="/" error />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>junk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisplayPage pageTitle="other stuff" backURL="/">
        {state.response.art.items.map((project) => (
          <WorkCard key={project._id} project={project} />
        ))}
      </DisplayPage>
    </>
  );
}
