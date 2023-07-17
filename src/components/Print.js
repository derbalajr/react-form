import React from "react";
import Translate from "./Translate";
export default function Print() {
  return (
    <div>
      <button>
        <Translate sentence={"print"} file={"print"} />
      </button>
    </div>
  );
}