import { CustomizationProps } from "../types";

export default function CustomizationPanel({
  layout,
  font,
  color,
  onChange,
}: CustomizationProps) {
  return (
    <section>
      <h2>Customization</h2>
      <label>
        Layout:
        <select
          value={layout}
          onChange={(e) => onChange("layout", e.target.value)}
        >
          <option value="single-column">Single Column</option>
          <option value="two-column">Two Column</option>
          <option value="grid">Grid</option>
        </select>
      </label>
      <label>
        Font:
        <select value={font} onChange={(e) => onChange("font", e.target.value)}>
          <option value="sans">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Monospace</option>
        </select>
      </label>
      <label>
        Theme Color:
        <input
          type="color"
          value={color}
          onChange={(e) => onChange("color", e.target.value)}
        />
      </label>
    </section>
  );
}
