import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-10 bg-[#1E1919] dark:bg-slate-800">
      <section className="flex flex-col lg:flex-row items-center w-full">
        {/* Left section with text content */}
        <div className="flex flex-col p-10 bg-[#2B2929] dark:bg-slate-800 text-white space-y-5 lg:w-1/2">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br />
            Storing everything for you and your business needs. All in one place.
          </h1>
          <p className="pb-10">
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>
          <Link href="/dashboard">
            <a className="flex items-center bg-blue-500 p-4 rounded-lg hover:bg-blue-600 transition">
              Try it for free!
              <ArrowRight className="ml-2" />
            </a>
          </Link>
        </div>
        
        {/* Right section with video content */}
        <div className="lg:w-1/2 h-full p-10">
          <video autoPlay loop muted className="rounded-lg w-full">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Disclaimer section */}
      <footer className="text-center mt-10">
        <p className="font-bold text-xl">Disclaimer</p>
        <p className="font-light p-2">
          This app is made from a video meant for informational and educational
          purposes only. We do not own or affiliate with Dropbox or any of its
          subsidiaries in any form. Copyright Disclaimer under section 107 of the
          Copyright Act 1976, allowance is made for "fair use" of this video for
          educational purposes only.
        </p>
      </footer>
    </main>
  );
}
