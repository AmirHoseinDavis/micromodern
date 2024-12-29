import {
  KeyConditionsValue,
  KyesType,
} from "@/app/products/types/inputProps.types";
import data from "./data";
import useStateConditions from "@/hooks/usQuery/useStateConditions/useStateConditions";
import useUpdaiteQuery from "@/hooks/usQuery/useUpdaite/useUpdaiteQuery";

const ConditionBox = ({
  keyCondition,
}: {
  keyCondition: Exclude<KyesType, "name">;
}) => {
  const { setCondition } = useStateConditions();
  const { updaiteDataQuery } = useUpdaiteQuery();

  const handleClick = (keyValue: KeyConditionsValue) => {
    setCondition({ key: keyCondition, conditionState: keyValue });
    updaiteDataQuery({
      inputKey: keyCondition,
      value: keyValue,
    });
  };

  return (
    <div className="flex items-center justify-between gap-4">
      {data.map((item) => (
        <div
          onClick={() => handleClick(item.Key)}
          className="flex justify-between gap-1"
          key={item.Key}
        >
          <label htmlFor={item.Key}>{item.name}</label>
          <input type="radio" name={keyCondition} id={item.Key} />
        </div>
      ))}
    </div>
  );
};

export default ConditionBox;
