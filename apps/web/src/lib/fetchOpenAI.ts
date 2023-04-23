import type { ChatResponse } from "src/types/GPT";

const API_KEY = process.env.OPENAI_API_KEY;
const API_ENDPOINT = "https://api.openai.com/v1/";

export async function fetchOpenAI(
  model: string,
  prompt: string
): Promise<ChatResponse | null> {
  console.log("key", API_KEY);
  try {
    const response = await fetch(`${API_ENDPOINT}chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
