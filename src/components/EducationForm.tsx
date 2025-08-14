import { Education } from "../types";

interface Props {
  data: Education[];
  onChange: (value: Education[]) => void;
}

export default function EducationForm({ data, onChange }: Props) {
  const updateEducation = (index: number, updated: Education) => {
    const newData = [...data];
    newData[index] = updated;
    onChange(newData);
  };

  const addEducation = () => {
    onChange([
      ...data,
      { school: "", degree: "", startDate: "", endDate: "" },
    ]);
  };

  const removeEducation = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <section>
      <h2>Education</h2>
      {data.map((edu, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="School"
            value={edu.school}
            onChange={(e) =>
              updateEducation(index, { ...edu, school: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) =>
              updateEducation(index, { ...edu, degree: e.target.value })
            }
          />
          <input
            type="month"
            value={edu.startDate}
            onChange={(e) =>
              updateEducation(index, { ...edu, startDate: e.target.value })
            }
          />
          <input
            type="month"
            value={edu.endDate}
            onChange={(e) =>
              updateEducation(index, { ...edu, endDate: e.target.value })
            }
          />
          <button type="button" onClick={() => removeEducation(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </section>
  );
}
