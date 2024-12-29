import { data } from "./data";
import ItemBox from "./ItemsBox/ItemBox";

const BottomBox = () => {
  return (
    <div className=" w-full overfxh">
      <ul
        className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5
       border-2 border-gray-300 rounded-md p-2 "
      >
        {data.map((item) => (
          <ItemBox item={item} key={item.key + item.title} />
        ))}
      </ul>
    </div>
  );
};

export default BottomBox;
