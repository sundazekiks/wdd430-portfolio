import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col min-h-screen">
        <Header />  {/* Global header component */}
        <main className="grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />  {/* Global footer component */}
      </body>
    </html>
  );
}