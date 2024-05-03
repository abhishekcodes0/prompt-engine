import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompt Engine",
  description: "Share and Find AI Prompts, A Next.JS fullstack app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
