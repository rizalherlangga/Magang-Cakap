import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import parse from "html-react-parser";

export default function FaqList({ faq }) {
  const parseHtmlContent = (htmlContent) => {
    const parsedElements = parse(htmlContent);
    const titleElement = parsedElements.find((el) => el.type === "h3");
    const descriptionElements = parsedElements.filter((el) => el.type !== "h3");

    return {
      title: titleElement || "No Title",
      description: descriptionElements || "No Description",
    };
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {faq.map((item) => {
        const { title, description } = parseHtmlContent(item.description);

        return (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-primary text-base">
              {title}
            </AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
