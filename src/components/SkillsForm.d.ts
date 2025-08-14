// src/components/SkillsForm.d.ts
import React from "react";

export interface SkillsFormProps {
  skills: string[];
  updateSkills: (skills: string[]) => void;
}

declare const SkillsForm: React.FC<SkillsFormProps>;
export default SkillsForm;
