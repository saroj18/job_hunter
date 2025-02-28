const templates = [
  { id: "template1", name: "Classic" },
  { id: "template2", name: "Modern" },
  { id: "template3", name: "Creative" },
];

type TemplateSelectionProps = {
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
};
export default function TemplateSelection({
  selectedTemplate,
  setSelectedTemplate,
}: TemplateSelectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choose a template:</h3>
      <span>{selectedTemplate}</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {template.name}
          </button>
        ))}
      </div>
    </div>
  );
}
