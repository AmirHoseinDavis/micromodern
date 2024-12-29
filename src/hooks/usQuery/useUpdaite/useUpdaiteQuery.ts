// imports
import { useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PropsUpdaiteQuery, typeDataForm } from "./types";
import useStateConditions from "../useStateConditions/useStateConditions";
import { KyesType } from "@/app/products/types/inputProps.types";


const useUpdaiteQuery = () => {
  // hooks and data
  const { KeysValue } = useStateConditions();
  const dataQueryRef = useRef<typeDataForm>({});
  const searchparams = useSearchParams();
  const router = useRouter();

  // updaite data query
  const updaiteDataQuery = ({ inputKey, value }: PropsUpdaiteQuery) => {


    // get  prev value  and get conditions
    const tempQuery = { ...dataQueryRef.current };
    const condition = KeysValue[inputKey as keyof typeof KeysValue];


    // updaite conditions re/op
    if (value.startsWith("op")) {
      tempQuery[inputKey] = value;
    }
    else if (value.startsWith("re")) {
      tempQuery[inputKey] = value
    }
    else if (value) {
      tempQuery[inputKey] = `${condition}${value}`;
    } else if (!value) {
      delete tempQuery[inputKey];
    }

    // declare setQuery
    setQuery(tempQuery, inputKey);
  };

  // set dataquery in query url
  const setQuery = (tempQuery: typeDataForm, inputKey: KyesType) => {


    // get url and set new url
    const Params = new URLSearchParams(searchparams);



    // delet params when value is not valide 
    const validtempQuery = Object.keys(tempQuery).length
    if (validtempQuery == 0) {
      Params.delete(inputKey);
    }


    // set params when value is valid

    for (const key in tempQuery) {
      const validKey = key as keyof typeDataForm;
      const value = tempQuery[validKey];

      if (value) {

        Params.set(key, value);
      } else {

        Params.delete(key);
      }
    }


    // push query data
    router.push(`?${Params.toString()}`);

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
