import FooterBottom from "../fragments/footer-bottom";

import FooterMain from "../fragments/footer-main";
import FooterMiddle from "../fragments/footer-middle";

const FooterTemplate = () => {
  return (
    <section className="text-slate-200  flex flex-col w-full max-w-7xl mx-auto px-4 md:px-4">
      <FooterMain />
      <FooterMiddle />
      <FooterBottom />
    </section>
  );
};

export default FooterTemplate;
