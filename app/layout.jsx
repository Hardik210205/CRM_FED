import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Keshav Encon CRM",
  description: "A centralised platform for managing the clients of all 4 portals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
