import React, { useEffect, useState } from "react";
import Head from "next/head";

import { DisplayPage } from "../../src/components/layout";
import { WorkCard } from "../../src/components/cards";
import { getProudOf, getOkay, getMostlyJunk } from "../api/getProject";
import { useSelector } from "react-redux";
import { selectFilter } from "../../features/projects/projectsSlice";

function initialState(args) {
  return {
    response: null,
    error: null,
    isLoading: true,
    ...args,
  };
}

const functionMapper = {
  "proud of": getProudOf(),
  okay: getOkay(),
  "mostly junk": getMostlyJunk(),
};

export default function WorkPage() {
  const [state, setState] = useState(() => initialState());
  const filter = useSelector(selectFilter).filter;

  useEffect(() => {
    // Fetch Post from DB
    const fetchData = async () => {
      try {
        const res = await functionMapper[filter];

        if (res) {
          setState({ ...state, response: res, isLoading: false });
        } else {
          setState({
            ...state,
            error: res,
            isLoading: false,
          });
        }
      } catch (error) {
        setState({
          ...state,
          error: {
            error: error.message,
          },
          isLoading: false,
        });
      }
    };

    fetchData();
  }, [filter]);

  if (state.isLoading) {
    return (
      <>
        <Head>
          <title>loading...</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <DisplayPage pageTitle="my work" backURL="/" isLoading />
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

        <DisplayPage pageTitle="my work" backURL="/" error />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisplayPage pageTitle="my work" backURL="/">
        {state.response.getProjectList.items.map((project) => (
          <WorkCard key={project._id} project={project} />
        ))}
      </DisplayPage>
    </>
  );
}
