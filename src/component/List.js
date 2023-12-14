import { forwardRef } from "react";

const List = forwardRef((props, ref) => {
  return (
    <div
      {...props}
      className="grid grid-cols-3 grid-rows-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-2 px-5"
      ref={ref}
    />
  );
});

export default List;
