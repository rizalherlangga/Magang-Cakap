import HeroDealTemplate from "@/components/template/hero-deal-template";
import { fetchBanners } from "@/lib/api";

const HomePage = async () => {
  const banners = await fetchBanners();
  return (
    <div>
      <HeroDealTemplate banners={banners} />
    </div>
  );
};

export default HomePage;
