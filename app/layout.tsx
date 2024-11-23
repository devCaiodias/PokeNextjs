import MainContainer from "./components/MainContainer";
import "./globals.css";

interface Props {
  children: React.ReactNode
}


export default function RootLayout({children}: Readonly<Props>) {
  return (
    <html lang="pt-br">
            <head>
              <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
              <title>NextPokedex</title>
            </head>
            <body>
            <MainContainer>
              {children}
            </MainContainer>
            </body>
          </html>
  );
}
