"use client";

import { useState } from "react";
import { fetchOpenAI } from "@lib";
import type { ChatResponse } from "src/types/GPT";

export const ChatPrompt = () => {
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [responses, setResponses] = useState<ChatResponse[]>([]);

  const addResponse = (response: ChatResponse) => {
    setResponses((responses) => [...responses, response]);
  };

  const handleClick = async () => {
    const response = await fetchOpenAI("gpt-3.5-turbo", currentPrompt);
    if (response && response.choices.length > 0) {
      addResponse(response);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Prompt:</h1>
      <input
        type="text"
        value={currentPrompt}
        onChange={(e) => setCurrentPrompt(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 ml-4 mb-4 rounded"
      >
        Submit
      </button>
      <h1 className="text-xl font-bold">Responses:</h1>
      {responses.map((res) => (
        <div key={res.id} className="py-2">
          <p>{res.choices[0].message.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
