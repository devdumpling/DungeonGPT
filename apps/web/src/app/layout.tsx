import "../styles/globals.css";
import { Container } from "src/components/Container";

export const metadata = {
  title: "DungeonGPT",
  description: "An epic adventure driven by ChatGPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
