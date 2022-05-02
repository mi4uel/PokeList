import React from "react";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div>
      <div className="mx-auto flex w-full lg:w-1/2 my-6 lg:my-16 justify-center items-center">
      <button className="px-8 text-2xl lg:text-4xl text-slate-800 " onClick={onLeftClick}>
        <MdKeyboardArrowLeft/>
      </button>
      <div className="text-sm lg:text-xl text-slate-800">
        {page} de {totalPages}
      </div>
      <button className="px-8 text-2xl lg:text-4xl text-slate-800" onClick={onRightClick}>
        <MdKeyboardArrowRight/>
      </button>
    </div>
    </div>
    
  );
};

export default Pagination;