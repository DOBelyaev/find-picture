const Sceleton = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div>
      <div className="w-full aspect-square bg-white-0 rounted rounded-lg border-solid border-2 border-gray-300"></div>
    </div>
  ));
};

export default Sceleton;
