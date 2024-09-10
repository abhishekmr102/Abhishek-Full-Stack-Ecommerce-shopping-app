import React, { useState } from 'react';

import { PiArrowCircleUpThin } from "react-icons/pi";
import { HiOutlineArrowCircleDown } from "react-icons/hi";

const NewPage = () => {

  const [data, setData] = useState(["1", "2", "3", "4", "5","6"]);
  const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
//   };

//   const goNext = () => {
//     setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
//   };

  const swapValues = (index1, index2) => {
    let newData = [...data];
    [newData[index1], newData[index2]] = [newData[index2], newData[index1]];
    // console.log(newData[index1])
    setData(newData);
  };

  const handleUpClick = (index) => {
    if (index > 0) {
      swapValues(index, index - 1);
    } else {
      swapValues(index, data.length - 1);
    }
  };

  const handleDownClick = (index) => {
    if (index < data.length - 1) {
      swapValues(index, index + 1);
    } else {
      swapValues(index, 0);
    }
  };

  return (
    <>
      <div>
        {data.map((val, ind) => {
          return (
            <ul className='bg-white p-4' key={ind}>
              <li>
                <h2>{val}</h2>
                <span className='d-flex justify-center'>
                  <button onClick={() => handleUpClick(ind)}> 
                    <PiArrowCircleUpThin />
                  </button>
                  <button onClick={() => handleDownClick(ind)}>
                    <HiOutlineArrowCircleDown />
                  </button>
                </span>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default NewPage;
