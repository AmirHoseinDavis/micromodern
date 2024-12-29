// imports

import { useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PropsUpdaiteQuery, typeDataForm } from "./types";
import useStateConditions from "../useStateConditions/useStateConditions";
import checkFalsy from "@/app/products/helpers/checkFalsy";

const useUpdaiteQuery = () => {
  // hooks and data
  const { KeysValue } = useStateConditions();
  const dataQueryRef = useRef<typeDataForm>({});
  const searchparams = useSearchParams();
  const router = useRouter();

  // updaite data query
  const updaiteDataQuery = ({ inputKey, value }: PropsUpdaiteQuery) => {
    // console.log(value);

    if (!checkFalsy(value)) return;
    const tempQuery = { ...dataQueryRef.current };
    const condition = KeysValue[inputKey as keyof typeof KeysValue];

    console.log("Before deletion:", tempQuery);

    if (value.toLowerCase().includes("rem")) {
      delete tempQuery[inputKey];
      delete dataQueryRef.current[inputKey];
    } else if (condition) {
      tempQuery[inputKey] = `${condition}${value}`;
    }
    console.log("After deletion:", tempQuery);

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
        if(value.toLowerCase().includes("rem")){
          Params.delete(key)
        }

      } else {
        Params.delete(key);
      }
    }

    router.push(`?${Params.toString()}`);

    return;
  };

  //  get query
  const getQuery = () => {
    const searchParams = new URLSearchParams(searchparams.toString());
    const obJectParamns = Object.fromEntries(searchParams);

    const prefix = ["op", "re", "remove"];

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
    setQuery,
  };
};

export default useUpdaiteQuery;
