import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-12">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google image"
          width={300}
          height={100}
        ></Image>
        <SearchInput />
      </div>
    </>
  );
}
