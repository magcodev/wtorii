import AboutPage from "@/components/AboutPage";
import Banner from "@/components/Banner";
import BlogPage from "@/components/BlogPage";
import EmailSection from "@/components/ContactPage";
import PrediosVenta from "@/components/PrediosVenta";
import PrediosRenta from "@/components/PrediosRenta";
import SocialNets from "@/components/SocialNets";

export default function Home() {
  return (
    <main style={{ fontFamily: "Montserrat" }}>
      <div className="mx-0">
        <Banner />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 mx-auto">
        <PrediosVenta />
        <PrediosRenta />
        <AboutPage />
        <SocialNets />
        {/* <EmailSection /> */}
      </div>
    </main>
  );
}
