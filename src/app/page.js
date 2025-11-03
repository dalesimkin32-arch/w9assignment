import Image from "next/image";
import NavBar from "@/components/NavBar";
import SignSpinner from "@/components/SignSpinner";

export default function Home() {
  return (
    <div className="w-screen h-screen relative bg-gray-800 opacity-80">
      <main>
        <NavBar />
        <SignSpinner>
          <div className="grid h-screen place-items-center container mx-auto min-h-screen">
            <div
              className="bg-blue-800 border-4 border-white rounded-xl p-8
           text-white text-3xl font-bold"
            >
              <h1>
                M80 Users <span className="animate-ping">Blinking</span> Log
                <br />
                <span className="text-center">(matey BLog)</span>
              </h1>
              <p>
                The Motorway Blog
                <br />
                for the M80
              </p>
            </div>
          </div>
        </SignSpinner>
      </main>
    </div>
  );
}
