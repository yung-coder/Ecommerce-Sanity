import { Toaster } from "react-hot-toast";
import { StateContext } from "../context/stateContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <StateContext>
          {children}
        </StateContext>
      </body>
    </html>
  );
}
