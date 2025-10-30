import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-800 opacity-80">
      <main>
        <body>
          <NavBar />
          <div className="bg-blue-800 border-4 border-white rounded-xl p-8 text-white text-3xl font-bold">
            <h1>
              M80 Users <span className="animate-ping">Blinking</span> Log
              (matey blog)
            </h1>
            <p>Motorway Blog for the M80</p>
          </div>
        </body>
      </main>
    </div>
  );
}
