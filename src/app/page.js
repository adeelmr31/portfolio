import Partners from "app/components/partners/Partners";
import Banner from "../components/banner/Banner";
import Features from "app/components/features/Features";
import Chart from "app/components/chart/Chart";
import Timeline from "app/components/timeline/Timeline";

export default function Home() {
  return (
    <main>
      <Banner />
      <Partners />
      <Features />
      <Chart />
      <Timeline />
    </main>
  );
}
