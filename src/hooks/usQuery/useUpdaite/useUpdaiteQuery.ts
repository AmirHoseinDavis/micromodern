// imports

import { useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PropsUpdaiteQuery, typeDataForm } from "./types";
import useStateConditions from "../useStateConditions/useStateConditions";
import { KeyConditionsValue } from "../useStateConditions/types";

const useUpdaiteQuery = () => {
  // hooks and data
  const { KeysValue } = useStateConditions();
  const dataQueryRef = useRef<typeDataForm>({});
  const searchparams = useSearchParams();
  const router = useRouter();

  // updaite data query
  const updaiteDataQuery = ({ inputKey, value }: PropsUpdaiteQuery) => {
    const tempQuery = { ...dataQueryRef.current };
    const condition = KeysValue[inputKey as keyof typeof KeysValue];
    if (condition) {
      tempQuery[inputKey] = `${condition}${value}`;
    }

    setQuery(tempQuery);
  };

  // set dataquery in query url
  const setQuery = (tempQuery: typeDataForm) => {
    const Params = new URLSearchParams(searchparams);

    for (const key in tempQuery) {
      const validKey = key as keyof typeDataForm;
      const value = tempQuery[validKey];
      if (value) {
        Params.set(key, value);
      }
    }

    router.push(`?${Params.toString()}`);

    return;
  };

  //  get query
  const getQuery = () => {
    const searchParams = new URLSearchParams(searchparams.toString());
    const obJectParamns = Object.fromEntries(searchParams);

    const prefix = ["op", "re"];

    // delete pre name of value
    for (const key in obJectParamns) {
      let value = obJectParamns[key];

      prefix.forEach((pre) => {
        if (value.startsWith(pre)) {
          value = value.replace(pre, "");
        }
      });

      obJectParamns[key] = value;
    }

    return obJectParamns;
  };

  return {
    updaiteDataQuery,
    getQuery,
  };
};

export default useUpdaiteQuery;
