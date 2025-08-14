import { Experience } from "../types";

interface Props {
  data: Experience[];
  onChange: (value: Experience[]) => void;
}

export default function ExperienceForm({ data, onChange }: Props) {
  const updateExperience = (index: number, updated: Experience) => {
    const newData = [...data];
    newData[index] = updated;
    onChange(newData);
  };

  const addExperience = () => {
    onChange([
      ...data,
      { company: "", position: "", startDate: "", endDate: "" },
    ]);
  };

  const removeExperience = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <section>
      <h2>Experience</h2>
      {data.map((exp, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) =>
              updateExperience(index, { ...exp, company: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Position"
            value={exp.position}
            onChange={(e) =>
              updateExperience(index, { ...exp, position: e.target.value })
            }
          />
          <input
            type="month"
            value={exp.startDate}
            onChange={(e) =>
              updateExperience(index, { ...exp, startDate: e.target.value })
            }
          />
          <input
            type="month"
            value={exp.endDate}
            onChange={(e) =>
              updateExperience(index, { ...exp, endDate: e.target.value })
            }
          />
          <button type="button" onClick={() => removeExperience(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addExperience}>
        Add Experience
      </button>
    </section>
  );
}
