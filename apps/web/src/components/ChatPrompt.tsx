"use client";

import { useState } from "react";
import { fetchOpenAI } from "@lib";

export const ChatPrompt = () => {
  const [currentPrompt, setCurrentPrompt] = useState("");
  return (
    <div>
      <h1 className="text-xl font-bold">Prompt:</h1>
      <input
        type="text"
        value={currentPrompt}
        onChange={(e) => setCurrentPrompt(e.target.value)}
      />
      <button
        onClick={async () => {
          const response = await fetchOpenAI("gpt-3.5-turbo", currentPrompt);
          console.log(response);
        }}
      >
        Submit
      </button>
    </div>
  );
};
