import MainContainer from "./components/MainContainer";
import "./globals.css";
// import fav from './favicon.ico'

export const metadata = {
  title: 'NextPoke',
  icons: {
    icon: './favicon.ico'
  }
}

interface Props {
  children: React.ReactNode
}


export default function RootLayout({children}: Readonly<Props>) {
  return (
    <html lang="pt-br">
            <body>
            <MainContainer>
              {children}
            </MainContainer>
            </body>
          </html>
  );
}
