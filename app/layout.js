import ThemeRegistry from '@/lib/ThemeRegistry';


export const metadata = {
  title: 'Marble & Pipe Seller',
  description: 'Premium marble and pipe solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}