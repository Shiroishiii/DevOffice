export default function CompanySelectCard({
  company,
  selected,
  onSelect,
}: any) {
  return (
    <div
      onClick={onSelect}
      className={`p-4 rounded-lg border cursor-pointer transition ${
        selected ? "border-white bg-white/10" : "border-gray-600"
      }`}
    >
      <h3 className="text-white font-bold">{company.name}</h3>
    </div>
  )
}