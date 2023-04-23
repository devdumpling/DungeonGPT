export type Choice = {
  finish_reason: string;
  index: number;
  message: Message;
};

export type Message = {
  role: "user" | "system" | "assistant";
  content: string;
};

export interface ChatResponse {
  id: string;
  model: string;
  object: string;
  choices: Choice[];
  usage: {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
  };
}
