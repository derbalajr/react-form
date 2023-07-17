import React from "react";
import Translate from "./Translate";
export default function Pay() {
  return (
    <div>
      <button>
        <Translate sentence={"pay"} file={"pay"} />
      </button>
    </div>
  );
}