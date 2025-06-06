import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/pages";

export default function App({ Component, pageProps }) {
  return (
    <NuqsAdapter>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />;
      </ThemeProvider>
    </NuqsAdapter>
  );
}
