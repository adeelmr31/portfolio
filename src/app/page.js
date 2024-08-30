import Partners from "app/components/partners/Partners";
import Banner from "../components/banner/Banner";
import Features from "app/components/features/Features";
import Chart from "app/components/chart/Chart";
import Timeline from "app/components/timeline/Timeline";
import Team from "app/components/team/Team";
import Testimonials from "app/components/testimonials/Testimonials";
import DownloadApp from "app/components/downloadApp/DownloadApp";
import FAQ from "app/components/faq/FAQ";
import NewsCard from "app/components/news/NewsCards";
import ContactUs from "app/components/contactUs/ContactUs";
import QuickLinks from "app/components/quickLinks/QuickLinks";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Banner />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="chart">
        <Chart />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="download">
        <DownloadApp />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="news">
        <NewsCard />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section id="quicklinks">
        <QuickLinks />
      </section>
    </main>
  );
}
