import Partners from "app/components/partners/Partners";
import Banner from "../components/banner/Banner";
import Features from "app/components/features/Features";
import Chart from "app/components/chart/Chart";
import Timeline from "app/components/timeline/Timeline";
import Team from "app/components/team/Team";
import Testimonials from "app/components/testimonials/Testimonials";
import DownloadApp from "app/components/downloadApp/DownloadApp";

export default function Home() {
  return (
    <main>
      <Banner />
      <Partners />
      <Features />
      <Chart />
      <Timeline />
      <Team />
      <Testimonials />
      <DownloadApp />
    </main>
  );
}
