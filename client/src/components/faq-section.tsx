import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "What is the Umoja Homespot?",
      answer: "The Umoja Homespot is a 5G-enabled router that provides high-speed, Uncapped home internet. It uses advanced wireless technology to deliver a reliable and fast connection without the need for traditional fibre or ADSL lines."
    },
    {
      question: "How does the payment work?",
      answer: "Plans start at R399 per month for uncapped internet, with no usage charges or pay-as-you-go fees. The router is free to use, the once-off activation fee is R300, and your first month is included. After payment, delivery takes 3-5 working days."
    },
    {
      question: "Which Umoja 5G speed should I choose?",
      answer: "Choose 20Mbps for everyday browsing, HD streaming and working from home; 30Mbps for busy households, 4K video and gaming; or 50Mbps for bandwidth-heavy homes, multiple 4K streams and home offices."
    },
   
    {
      question: "Is there really no data limit?",
      answer: "Yes. All Umoja plans are uncapped, so your connection is not disconnected when you reach a usage threshold. Our Fair Use Policy may reduce your speed to 5Mbps for the remainder of the billing period after you use 300GB on the R399 plan, 500GB on the R499 plan, or 800GB on the R549 plan."
    },
    {
      question: "How does the Fair Use Policy work?",
      answer: "The R399 plan has a 300GB fair-use threshold, the R499 plan has a 500GB threshold, and the R549 plan has an 800GB threshold. If you reach your plan's threshold during a billing period, your connection speed is reduced to 5Mbps for the remainder of that billing period. Your service remains uncapped and is not disconnected."
    },
    {
      question: "Does the router work during load shedding?",
      answer: "Yes! Your Umoja router has a built-in battery backup, so it stays on automatically when the power goes out. There's nothing to set up or switch — the moment electricity cuts, the router switches to battery power seamlessly. This means you can continue working, streaming, and browsing through load shedding without any interruption."
    },
    {
      question: "Do I own the router?",
      answer: "The router remains Umoja's property, but it's completely free for you to use as long as you're subscribed to our service. No rental fees, no purchase required - just enjoy your unlimited internet!"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="faq-title">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground" data-testid="faq-subtitle">
            Everything you need to know about Umoja's 5G service
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="border border-border" data-testid={`faq-item-${index}`}>
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold hover:bg-accent/50 transition-colors duration-200 rounded-t-lg"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                data-testid={`faq-button-${index}`}
              >
                <span data-testid={`faq-question-${index}`}>{item.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    openItems.includes(index) ? "rotate-180" : ""
                  )}
                  aria-hidden="true"
                />
              </button>
              {openItems.includes(index) && (
                <CardContent
                  className="px-6 pb-4"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="text-muted-foreground leading-relaxed" data-testid={`faq-answer-${index}`}>
                    {item.answer}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
