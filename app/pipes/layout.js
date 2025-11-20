'use client'

import Footer from "@/components/common/Footer/PipeFooter";
import Header from "@/components/common/Header/PipeHeader";

export default function RootLayout({ children }) {
  return (
      <>
        <Header />
        {children}
        <Footer/>
      </>
  );
}
