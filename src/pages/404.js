import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-screen h-screen relative bg-gray-800 opacity-80">
      <div
        className="bg-blue-800 border-4 border-white rounded-xl p-8
           text-white text-3xl font-bold"
      >
        <h1>M 404 Road Closed !</h1>
        <p>
          Follow Diversion: <Link href="/">Go Home</Link>
        </p>
        <p>Page not found 404</p>
      </div>
    </div>
  );
}
