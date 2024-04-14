 import Image from "next/image";
import Nav from "./mycomp/nav";
import First from "./mycomp/first";
import Footer from "./mycomp/footer";
import './globals.css';

export default function Home() {
  return (
<div>

  <div>
    <Nav/>
  </div>
  <div>
    <First />
  </div>
  <div>
    <Footer/>
  </div>
</div>  
  );
}
