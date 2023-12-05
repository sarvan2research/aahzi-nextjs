import Image from "next/image";
import Navbar from "./NavBar";
import Form from "./Form";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Hello Aahzi</h1>
      <Form />
    </main>
  );
}
