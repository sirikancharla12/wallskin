
import { useState } from "react"
import { Plus } from "lucide-react"
import faqDataRaw from "../data/faq.json"
import SectionHeader2 from "../ui/header2"
import AnimationContainer from "../ui/AnimationContainer"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = faqDataRaw as FAQItem[]

const FAQItemComponent = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <div
      className="border-b-2 border-soft-gray py-6 w-full transition-all duration-300"

    >
      <div className="w-full max-w-4xl">
        <button
          onClick={onToggle}
          className="flex items-center w-full text-left hover:text-[var(--color-primary)] transition-colors duration-200"
          aria-expanded={isOpen} 
        >
          <div className="flex-shrink-0 mr-4">
            {isOpen ? (
              <div className="w-6 h-1    transition-all duration-200"></div>
            ) : (
              <Plus className="w-6 h-6  transition-all duration-200" />
            )}
          </div>
          <h3 className="text-xl lg:text-2xl font-semibold font-sk text-dark-gray">
            {item.question}
          </h3>
        </button>

        {/* Answer with animation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ml-10 pl-4 border-l-2 border-soft-gray ${
            isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
          }`}
        >
            <p className="text-base lg:text-lg font-sk text-medium-gray leading-relaxed font-medium">

            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}


export default function Faq() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["1"]))

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    newOpenItems.has(id) ? newOpenItems.delete(id) : newOpenItems.add(id)
    setOpenItems(newOpenItems)
  }

  return (
  <AnimationContainer>
      <section className=" py-20 w-full max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 ml-4">
  <SectionHeader2 title="FAQ" />
</div>

        
     
      </div>

      <div className="flex flex-col justify-start items-start w-full ">
        {faqData.map((item: FAQItem) => (
          <FAQItemComponent
            key={item.id}
            item={item}
            isOpen={openItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </section>
  </AnimationContainer>
  )
}