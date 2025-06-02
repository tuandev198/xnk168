import React, { useState, useEffect, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const CategoryList = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Nhóm và loại trùng categories theo variant
  const groupedCategories = useMemo(() => {
    const map = new Map();

    categories.forEach(({ variant, categories: cats }) => {
      if (!map.has(variant)) {
        map.set(variant, new Set());
      }
      cats.forEach((cat) => map.get(variant).add(cat));
    });

    return Array.from(map.entries()).map(([variant, catsSet]) => ({
      key: variant,
      group: variant,
      items: Array.from(catsSet).map((cat) => ({
        key: cat,
        label: cat,
      })),
    }));
  }, [categories]);

  const accordionContent = (
    <Accordion
      type="multiple"
      className="mt-4 space-y-2 max-h-[60vh] overflow-y-auto"
    >
      {groupedCategories.map((group) => (
        <AccordionItem key={group.key} value={group.group}>
          <AccordionTrigger className="text-sm font-bold text-left uppercase transition-colors duration-300 data-[state=open]:text-shop_dark_green">
            {group.group}
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              value={selectedCategory || ""}
              onValueChange={(val) => {
                setSelectedCategory(val.toLowerCase());
                if (isMobile) setIsOpen(false);
              }}
              className="space-y-2 mt-2 ml-3"
            >
              {group.items.map((item) => {
                const inputId = `${group.key}-${item.key}`;
                return (
                  <div
                    key={item.key}
                    className="flex items-center space-x-2 hover:cursor-pointer"
                  >
                    <RadioGroupItem
                      value={item.key.toLowerCase()}
                      id={inputId}
                      className="h-4 w-4 border-[1.5px] border-gray-400 data-[state=checked]:border-shop_dark_green data-[state=checked]:bg-shop_dark_green"
                    />
                    <Label
                      htmlFor={inputId}
                      className={`break-words text-wrap ${
                        selectedCategory === item.key
                          ? "font-semibold text-shop_dark_green"
                          : "font-normal"
                      }`}
                    >
                      {item.label}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>

            {selectedCategory &&
              group.items.some((i) => i.key.toLowerCase() === selectedCategory) && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-3 ml-3 text-xs text-red-500 underline"
                >
                  Deselect
                </button>
              )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div className="w-full bg-white p-4 sm:p-5">
      {isMobile ? (
        <>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 w-full rounded border border-shop_dark_green bg-shop_dark_green px-4 py-2 text-white"
          >
            Chọn danh mục
          </button>

          {isOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="category-modal-title"
            >
              <div
                className="bg-white rounded-lg p-4 max-w-md w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 id="category-modal-title" className="text-lg font-bold">
                    Chọn danh mục
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold leading-none"
                    aria-label="Đóng modal"
                  >
                    &times;
                  </button>
                </div>
                {accordionContent}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="mt-4 max-h-[80vh] overflow-y-auto">{accordionContent}</div>
      )}
    </div>
  );
};

export default CategoryList;
