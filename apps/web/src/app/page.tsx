import { ChatPrompt } from "src/components/ChatPrompt";

export default async function RootPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">DungeonGPT</h1>
      <p className="text-xl">An epic adventure driven by ChatGPT</p>
      <ChatPrompt />
    </div>
  );
}
