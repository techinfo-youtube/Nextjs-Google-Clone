import "./globals.css";

export const metadata = {
  title: "Google CLone",
  description: "techinfo yt google clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
