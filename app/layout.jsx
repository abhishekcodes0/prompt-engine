// import "@styles/global.css";

export const metadata = {
  title: "Prompt Engine",
  description: "Share and Find AI Prompts, A Next.JS fullstack app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient">
            <main className="app">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
