import { conditions } from "./conditionsData.types";

const conditionData = ({ searchParams }: { searchParams: URLSearchParams }) => {
  // comper tp object of key value and remove key of undefine
  const query: { [key: string]: string } = Object.fromEntries(
    Array.from(searchParams.entries()).filter((_, value) => value !== undefined)
  );

  // object condition
  const conditions: conditions = {
    AND: [],
    OR: [],
    name: { mode: "insensitive" },
  };

  // add condition of query
  for (const key in query) {
    // value
    const value = query[key];

    // or
    if (value.startsWith("op")) {
      // min
      if (key.startsWith("min")) {
        const newValue = value.replace("op", "");
        const felId = key.replace("min", "").toLocaleLowerCase();
        conditions.OR?.push({
          [felId]: {
            gte: +newValue,
          },
        });
      }

      // max
      if (key.startsWith("max")) {
        const newValue = value.replace("op", "");
        const felId = key.replace("max", "").toLocaleLowerCase();
        conditions.OR?.push({
          [felId]: {
            gte: +newValue,
          },
        });
      }
    }

    // and
    if (value.startsWith("re")) {
      // min
      if (key.startsWith("min")) {
        const newValue = value.replace("re", "");
        const felId = key.replace("min", "").toLocaleLowerCase();
        conditions.AND?.push({
          [felId]: {
            gte: +newValue,
          },
        });
      }

      // max
      if (key.startsWith("max")) {
        const newValue = value.replace("re", "");
        const felId = key.replace("max", "").toLocaleLowerCase();
        conditions.AND?.push({
          [felId]: {
            gte: +newValue,
          },
        });
      }
    }

    // search as name
    if (key == "name" && typeof value === "string") {
      conditions.name = {
        contains: value,
      };
    }
  }

  // delete condition whene is empty or null
  if (conditions.AND && conditions.AND?.length == 0) delete conditions.AND;
  if (conditions.OR && conditions.OR?.length == 0) delete conditions.OR;
  if (!conditions.name?.contains) delete conditions.name;

  return conditions;
};

export default conditionData;
