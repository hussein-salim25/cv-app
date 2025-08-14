import { Skills } from "../types";

interface Props {
  data: Skills;
  onChange: (value: Skills) => void;
}

export default function SkillsForm({ data, onChange }: Props) {
  const updateSkill = (index: number, value: string) => {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    onChange({ skills: newSkills });
  };

  const addSkill = () => {
    onChange({ skills: [...data.skills, ""] });
  };

  const removeSkill = (index: number) => {
    onChange({ skills: data.skills.filter((_, i) => i !== index) });
  };

  return (
    <section>
      <h2>Skills</h2>
      {data.skills.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Skill"
            value={skill}
            onChange={(e) => updateSkill(index, e.target.value)}
          />
          <button type="button" onClick={() => removeSkill(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addSkill}>
        Add Skill
      </button>
    </section>
  );
}
