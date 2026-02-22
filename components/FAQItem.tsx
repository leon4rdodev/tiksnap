"use client";

import { useState, useRef, useEffect } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`bg-gray-900 rounded-lg border transition-all duration-300 ${
        isOpen
          ? "border-[#FE2C55]"
          : "border-gray-700 hover:border-[#FE2C55]/50"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center flex-1">
          <HelpCircle className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0" />
          <span className="font-semibold text-white">{question}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-3 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div ref={contentRef} className="px-4 pb-4">
          <p className="text-sm text-gray-400 pl-8 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
