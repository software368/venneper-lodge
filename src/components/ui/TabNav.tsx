interface Tab {
  id: string
  label: string
}

interface Props {
  tabs: Tab[]
  activeTab: string
  onTabChange: (id: string) => void
}

export default function TabNav({ tabs, activeTab, onTabChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
            activeTab === tab.id
              ? 'bg-forest-green text-warm-white'
              : 'bg-warm-sand/50 text-charcoal hover:bg-warm-sand'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
