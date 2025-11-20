'use client'

import Footer from "@/components/common/Footer/MarbleFooter";
import Header from "@/components/common/Header/MarbleHeader";

export default function RootLayout({ children }) {
  return (
      <>
        <Header />
        {children}
        <Footer />
      </>
  );
}
