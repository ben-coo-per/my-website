import React, { useEffect, useState } from "react";
import Head from "next/head";

import { DisplayPage } from "../../src/components/shared/layout";
import { WorkCard } from "../../src/components/shared/cards";
import { getAllWork } from "../api/getProject";

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
        const res = await getAllWork();

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

        <DisplayPage pageTitle="work" backURL="/" isLoading />
      </>
    );
  }

  if (state.error) {
    return (
      <>
        <Head>
          <title>work</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <DisplayPage pageTitle="work" backURL="/" error />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisplayPage pageTitle="work" backURL="/">
        {state.response.work.items.map((project) => (
          <WorkCard key={project._id} project={project} />
        ))}
      </DisplayPage>
    </>
  );
}
