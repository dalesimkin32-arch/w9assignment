import Link from "next/link";

export default function NotFound() {
  // Usually we just want to link back to a "safe" page on a not-found page, either home or a relevant page
  return (
    <>
      <p>We couldn&apos;t find the page you were after.</p>
      <Link href="/">Go home instead please</Link>
    </>
  );
}
