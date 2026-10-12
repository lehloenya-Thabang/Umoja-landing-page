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
      answer: "It's simple! You pay R399 every month for unlimited internet - no usage charges or pay-as-you-go fees. The router is free to use (included with your subscription) and there's just a one-time R699 setup fee for installation and activation. After payment, delivery takes 3-5 working days."
    },
    {
      question: "How fast is \"20Mbps 5G Uncapped\"?",
      answer: "Our 20Mbps speed is perfect for families. You can stream HD videos, video call, browse social media, and work from home simultaneously. It's fast enough for 4-6 devices to be connected at once without slowdowns."
    },
   
    {
      question: "Is there really no data limit?",
      answer: "Yes, you get Uncapped data with generous usage allowances! While there will be a fair usage policy to ensure network quality for all users, you can stream, download, and browse freely for typical home internet usage without worrying about running out of data."
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
    <section id="faq" className="py-20 bg-background">
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
                data-testid={`faq-button-${index}`}
              >
                <span data-testid={`faq-question-${index}`}>{item.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    openItems.includes(index) ? "rotate-180" : ""
                  )} 
                />
              </button>
              {openItems.includes(index) && (
                <CardContent className="px-6 pb-4">
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
