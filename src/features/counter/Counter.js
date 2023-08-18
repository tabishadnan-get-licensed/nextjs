"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { RootState } from "@/lib/store"; // Make sure to provide the correct path to the RootState type

function Counter() {
  const count = useSelector((state) => state.value);

  console.log("count", count);

  const dispatch = useDispatch();

  return (
    <div className="w-full ">
      <div className="flex justify-center gap-5">
        <button className="border-1px" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default Counter;
