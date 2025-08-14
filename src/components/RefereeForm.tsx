import { useState } from "react";
import { Referee } from "../types";

interface Props {
  data: Referee[];
  onChange: (value: Referee[]) => void;
}

export default function RefereeForm({ data, onChange }: Props) {
  const [providedOnRequest, setProvidedOnRequest] = useState(data.length === 0);

  const handleAddReferee = () => {
    onChange([...data, { name: "", position: "", contact: "" }]);
    setProvidedOnRequest(false);
  };

  const handleRefereeChange = (index: number, field: keyof Referee, value: string) => {
    const updated = [...data];
    updated[index][field] = value;
    onChange(updated);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h4>Referees</h4>
      <label>
        <input
          type="checkbox"
          checked={providedOnRequest}
          onChange={(e) => {
            setProvidedOnRequest(e.target.checked);
            if (e.target.checked) onChange([]);
          }}
        />{" "}
        Provided upon request
      </label>

      {!providedOnRequest &&
        data.map((ref, i) => (
          <div key={i} style={{ marginTop: "10px", padding: "5px", border: "1px solid #ccc" }}>
            <input
              type="text"
              placeholder="Name"
              value={ref.name}
              onChange={(e) => handleRefereeChange(i, "name", e.target.value)}
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <input
              type="text"
              placeholder="Position"
              value={ref.position}
              onChange={(e) => handleRefereeChange(i, "position", e.target.value)}
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <input
              type="text"
              placeholder="Contact"
              value={ref.contact}
              onChange={(e) => handleRefereeChange(i, "contact", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ))}

      {!providedOnRequest && (
        <button onClick={handleAddReferee} style={{ marginTop: "10px" }}>
          Add Referee
        </button>
      )}
    </div>
  );
}
