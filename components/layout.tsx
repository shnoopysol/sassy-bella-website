import Meta from "./meta";
import Navbar from "./Navbar";
import SocialsBar from "./SocialsBar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
      <SocialsBar />
    </>
  );
};

export default Layout;
