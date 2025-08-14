interface Props {
  data: string;
  onChange: (value: string) => void;
}

export default function PersonalSummaryForm({ data, onChange }: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h4>Personal Summary</h4>
      <textarea
        value={data}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write a brief summary about yourself..."
        style={{ width: "100%", minHeight: "80px", padding: "8px" }}
      />
    </div>
  );
}
