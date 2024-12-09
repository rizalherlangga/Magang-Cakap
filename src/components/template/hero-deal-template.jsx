import BannerCarousel from "../fragments/banner-carousel";
import Voucher from "../fragments/voucher";
import { Skeleton } from "../ui/skeleton";

const HeroDealTemplate = ({ banners }) => {
  return (
    <div>
      {banners.data?.length ? (
        <BannerCarousel banners={banners.data} />
      ) : (
        <Skeleton className="lg:h-[25rem] md:h-[18rem] h-[15rem] rounded-xl bg-slate-400 w-full max-w-7xl max-h-[26rem]" />
      )}
      <Voucher />
    </div>
  );
};

export default HeroDealTemplate;
