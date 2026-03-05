import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import TabNav from '../components/ui/TabNav'
import { menuSections } from '../data/menu'

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('ontbijt')
  const activeSection = menuSections.find(s => s.id === activeTab)

  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Menukaart"
        description="Bekijk de menukaart van Venneper Lodge: ontbijt, lunch, diner, pannenkoeken, salades, vis- en vleesgerechten. Voor ieder wat wils in Nieuw-Vennep."
        path="/menu"
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Menukaarten"
          title="Bekijk de menukaarten"
          description="De heerlijkste hapjes en drankjes, verrukkelijke pannenkoeken, salades, vis- en vleesgerechten. Voor ieder wat wils!"
        />

        <TabNav
          tabs={menuSections.map(s => ({ id: s.id, label: s.label }))}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {activeSection && (
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {activeSection.categories.map(category => (
              <div key={category.name}>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-6 pb-2 border-b border-warm-sand/50">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.items.map(item => (
                    <div key={item.name} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-charcoal">{item.name}</h4>
                        <p className="text-sm text-charcoal/60 mt-0.5">{item.description}</p>
                      </div>
                      <span className="text-burnt-amber font-semibold whitespace-nowrap">
                        &euro; {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
