import CustomCursor from '../components/CustomCursor';
import './globals.css';

export const metadata = {
  title: 'Nabi Shafin | Full-Stack Developer',
  description: 'Portfolio of Nabi Shafin, a passionate Full-Stack Developer specialized in React, Next.js, and modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
