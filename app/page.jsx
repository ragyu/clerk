import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h1 className="text-2xl mb-4 font-bold">Welcome Home</h1>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://clerk.com/"
          className="text-xl text-blue-700 font-bold"
        >
          clerk.com
        </Link>
        <p className="mb-2">
          This is a demo of Clerk authentication. Clerk is more than a "sign-in
          box." Integrate complete user management UIs and APIs, purpose-built
          for React, Next.js, and the Modern Web.
        </p>
      </div>
    </>
  );
}
