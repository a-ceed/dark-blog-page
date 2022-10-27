import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from 'next/router';
import Banner from './Banner'
import HeaderIndex from "./HeaderIndex";


export default function Layout({ children }) {

    const url = useRouter();
    let isHome;


    if ( url.asPath ==="/" ) {
        isHome = "true"
    }

  return (
    <div className="site-wrapper">

        {isHome ? <HeaderIndex /> : <Header />}

      {children}
      <Footer />
    </div>
  );
}
