import { CvData } from "../types";

interface Props {
  cvData: CvData;
  customization: {
    layout: "single-column" | "two-column" | "grid";
    font: "sans" | "serif" | "mono";
    color: string;
  };
}

export default function ResumePreview({ cvData, customization }: Props) {
  const fontFamily =
    customization.font === "sans"
      ? "Arial, sans-serif"
      : customization.font === "serif"
      ? "Georgia, serif"
      : "Courier New, monospace";

  return (
    <div
      style={{
        border: `3px solid ${customization.color}`,
        fontFamily,
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: customization.color,
          color: "#fff",
          padding: "1rem",
        }}
      >
        <h1 style={{ margin: 0 }}>{cvData.personalDetails.name}</h1>
        <p style={{ margin: "0.2rem 0" }}>{cvData.personalDetails.email}</p>
        <p style={{ margin: 0 }}>{cvData.personalDetails.phone}</p>
      </div>

      {/* Body */}
      <div style={{ padding: "1rem" }}>
        {/* Personal Summary */}
        {cvData.personalSummary && (
          <>
            <h2>Personal Summary</h2>
            <p>{cvData.personalSummary}</p>
          </>
        )}

        {/* Skills */}
        {cvData.skills.skills.length > 0 && (
          <>
            <h2>Skills</h2>
            <ul>
              {cvData.skills.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </>
        )}

        {/* Experience */}
        {cvData.experience.length > 0 && (
          <>
            <h2>Experience</h2>
            {cvData.experience.map((exp, i) => (
              <div key={i}>
                <strong>{exp.company}</strong> - {exp.position} (
                {exp.startDate} to {exp.endDate})
              </div>
            ))}
          </>
        )}

        {/* Education */}
        {cvData.education.length > 0 && (
          <>
            <h2>Education</h2>
            {cvData.education.map((edu, i) => (
              <div key={i}>
                {edu.school} - {edu.degree} ({edu.startDate} to {edu.endDate})
              </div>
            ))}
          </>
        )}

        {/* Referees */}
        {cvData.referees.length > 0 ? (
          <>
            <h2>Referees</h2>
            {cvData.referees.map((ref, i) => (
              <div key={i}>
                <strong>{ref.name}</strong> - {ref.position} ({ref.contact})
              </div>
            ))}
          </>
        ) : (
          <p><em>Referees provided upon request</em></p>
        )}
      </div>
    </div>
  );
}
