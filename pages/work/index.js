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
        if (res.status >= 400) {
          setState(
            initialState({
              error: await res.json(),
              isLoading: false,
            })
          );
        } else {
          setState(
            initialState({
              response: await res.json(),
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

        <DisplayPage pageTitle="Work" backURL="/" isLoading />
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

        <DisplayPage pageTitle="Work" backURL="/" error />
      </>
    );
  }

  console.log(state);
  return (
    <>
      <Head>
        <title>work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisplayPage pageTitle="Work" backURL="/">
        {state.response.data.work.items.map((project) => (
          <WorkCard key={project._id} project={project} />
        ))}
      </DisplayPage>
    </>
  );
}

const project = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  name: "Herd",
  isWork: true,
  description: "Herd is a great thing and everyone should use it.",
  year: "2020 - Present",
};
