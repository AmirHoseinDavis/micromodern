import { data } from "../../_components/AddFilter/ButtomBox/data";
import { typeItemInputBoxTop } from "../../_components/AddFilter/TopBox/itemBox/types";
import { KyesType } from "../../types/inputProps.types";
import { inputChangeData } from "./types";

const changeDataofTopBox = ({ item }: { item: inputChangeData }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataMap = new Map(data.map((dataItem) => [dataItem.key, dataItem]));
  const ExportData: typeItemInputBoxTop[] = [];

  Object.keys(item).forEach((keyItem) => {
    const keyData = dataMap.get(keyItem as KyesType);

    if (keyData) {
      ExportData.push({
        item: {
          key: keyItem as KyesType,
          title: keyData.title,
          typeInput: keyData.typeInput,
        },
      });
    }
  });

  return ExportData;
};

export default changeDataofTopBox;
