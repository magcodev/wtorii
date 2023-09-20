import AboutPage from "@/components/AboutPage";
import Banner from "@/components/Banner";
import BlogPage from "@/components/BlogPage";
import ContactPage from "@/components/ContactPage";
import CollageCard from "@/components/CollageCard";

export default function Home() {
  return (
    <main style={{ fontFamily: "Montserrat" }}>
      <div className="mx-0">
        <Banner />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 mx-auto">
        <CollageCard />
        <BlogPage />
        <AboutPage />
        <ContactPage />
      </div>
    </main>
  );
}
