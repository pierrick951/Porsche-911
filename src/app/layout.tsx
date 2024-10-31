import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Porsche 911 ",
  description: "Porsche 911 turbo 50 Years",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <header><Header/></header>
        
        {children}

        <footer className="bg-zinc-950 p-10">
         <Footer/>  
        </footer>
        </body>
       
    </html>
  );
}
