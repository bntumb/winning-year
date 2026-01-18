import LinkWithIcon from "@/design-system/compoments/LinkWithIcons/LinkWithIcons";
import TopNavigationBar from "@/design-system/compoments/TopNavigationBar/TopNavigationBar";
export const metadata = {
  title: "Winning year",
};
import './globals.css'
import LeftSideNavigationBar from "@/design-system/compoments/LeftSideNavigationBar/LeftSideNavigationBar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layoutContainer">

          <LeftSideNavigationBar/>

        <div className={'pageContent'}>

          {children}
        </div>
        </div>
       
      </body>
    </html>
  );
}
