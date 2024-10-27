import "./globals.css";
import NavBar from "@components/NavBar"

import PageTransition from "@animations/PageTransition";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
      
       

          <NavBar />
          
          {children}
        
      </body>
    </html>
  );
}
