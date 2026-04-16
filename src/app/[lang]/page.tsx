import PageLoader from "@/components/shared/PageLoader";
import EmployeeSelfService from "@/components/homepage/EmployeeSelfService";
import Faq from "@/components/homepage/Faq";
import HeroSection from "@/components/homepage/HeroSection";
import OurModules from "@/components/homepage/OurModules";
import PlatformBenefits from "@/components/homepage/PlatformBenefits";
import Pricing from "@/components/homepage/Pricing";
import Testimonials from "@/components/homepage/Testimonials";
import RecentBlogs from "@/components/homepage/RecentBlogs";
import { staticPricingData } from "@/data/staticPricing";
import { getHomePageData } from "@/data/loader";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const response = await getHomePageData(lang);

  if (!response) {
    return <div>Loading...</div>;
  }

  const heroSectionData = response.data.blocks.find(
    (block: any) => block.__component === "home.hero-section",
  );

  const modules = response.data.blocks.find(
    (block: any) => block.__component === "home.our-modules",
  );

  const selfServiceData = response.data.blocks.find(
    (block: any) => block.__component === "home.self-service-portal",
  );

  const testimonialData = response.data.blocks.find(
    (block: any) => block.__component === "home.testimonial",
  );

  const platformBenefitsData = response.data.blocks.find(
    (block: any) => block.__component === "home.platform-benefits",
  );

  const pricingData = response.data.blocks.find(
    (block: any) => block.__component === "home.pricing",
  );

  const faqData = response.data.blocks.find(
    (block: any) => block.__component === "home.faq",
  );

  const blogData = response.data.blocks.find(
    (block: any) => block.__component === "home.blog",
  );

  return (
    <div className="">
      <PageLoader />
      {heroSectionData && <HeroSection data={heroSectionData} />}
      <OurModules data={modules} lang={lang} />
      <EmployeeSelfService data={selfServiceData} />
      <Testimonials data={testimonialData} />
      <PlatformBenefits data={platformBenefitsData} />
      <Pricing pricingData={pricingData} fallbackData={staticPricingData} />
      <Faq data={faqData} />
      <RecentBlogs data={blogData} lang={lang} />
      {/* hello world */}
    </div>
  );
}
