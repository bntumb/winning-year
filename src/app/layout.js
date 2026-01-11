import LinkWithIcon from "@/design-system/compoments/LinkWithIcons/LinkWithIcons";
import TopNavigationBar from "@/design-system/compoments/TopNavigationBar/TopNavigationBar";
export const metadata = {
  title: "Winning year",
};
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNavigationBar/>
        <div className={'pageContent'}>
          {children}
        </div>
       
      </body>
    </html>
  );
}
