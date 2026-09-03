'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border py-4 transition-colors">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-medium text-foreground group-hover:opacity-80 transition-opacity">
          {question}
        </span>
        <span
          className={cn(
            'w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-sm font-semibold shrink-0 transition-transform duration-200',
            isOpen && 'rotate-45'
          )}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.2, delay: 0.05 },
            }}
            className="overflow-hidden"
          >
            <p className="pt-2 pb-4 text-sm sm:text-base text-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items }: { items: AccordionItemProps[] }) {
  return (
    <div className="w-full flex flex-col">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
}
