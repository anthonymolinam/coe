'use client';
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { faqs } from "@/utils/data";
import { useState, useRef, useEffect } from "react";

const Faq = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (ref) {
        if (openItems.includes(i)) {
          ref.style.maxHeight = `${ref.scrollHeight}px`;
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [openItems]);

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-[50px]">Preguntas frecuentes</h2>
        <div className="max-w-5xl mx-auto">
          {faqs.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={index}
                className={`px-[30px] pt-7 pb-4 border-b cursor-pointer select-none`}
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between mb-[10px]">
                  <h4 className="h4">{item.question}</h4>
                  <div className="text-accent">
                    {isOpen ? (
                      <RiSubtractFill className="text-2xl" />
                    ) : (
                      <RiAddFill className="text-2xl" />
                    )}
                  </div>
                </div>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="overflow-hidden transition-all duration-300 ease-in-out max-h-0"
                >
                  <p className="font-light">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
