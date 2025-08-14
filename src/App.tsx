import { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
import { CvData, CustomizationFields } from "./types";
import PersonalSummaryForm from "./components/PersonalSummaryForm";
import SkillsForm from "./components/SkillsForm";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import RefereeForm from "./components/RefereeForm";
import CustomizationPanel from "./components/CustomizationPanel";
import ResumePreview from "./components/ResumePreview";

export default function App() {
  const [cvData, setCvData] = useState<CvData>({
    personalDetails: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+123456789",
    },
    personalSummary: "",
    skills: { skills: ["JavaScript", "React", "TypeScript"] },
    experience: [
      {
        company: "Tech Corp",
        position: "Frontend Developer",
        startDate: "2020-01",
        endDate: "2023-06",
      },
    ],
    education: [
      {
        school: "Example University",
        degree: "BSc Computer Science",
        startDate: "2016-09",
        endDate: "2020-06",
      },
    ],
    referees: [],
  });

  const [customization, setCustomization] = useState({
    layout: "single-column" as const,
    font: "sans" as const,
    color: "#0b1e33",
  });

  // Load saved customization
  useEffect(() => {
    const saved = localStorage.getItem("cvCustomization");
    if (saved) {
      setCustomization(JSON.parse(saved));
    }
  }, []);

  // Save customization
  const saveCustomization = () => {
    localStorage.setItem("cvCustomization", JSON.stringify(customization));
    alert("Customization saved!");
  };

  // PDF Export
  const exportPdf = () => {
    const element = document.getElementById("cv-preview");
    if (!element) return;
    html2pdf()
      .set({ margin: 0.5, filename: "My_CV.pdf", html2canvas: { scale: 2 } })
      .from(element)
      .save();
  };

  // Update a section of the CV
  const updateCvSection = (section: keyof CvData, value: any) => {
    setCvData((prev) => ({ ...prev, [section]: value }));
  };

  // Update customization
  const updateCustomization = (field: CustomizationFields, value: any) => {
    setCustomization((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ display: "flex", flex: 1, gap: "20px" }}>
        {/* Left Sidebar */}
        <div style={{ flex: 1, background: "#f8f9fa", padding: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <h1 style={{ margin: 0, fontSize: "1.8rem" }}>CV-Builder</h1>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              Create a clean, professional resume in minutes.
            </p>
          </div>

          <h3 style={{ borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>
            Customize CV
          </h3>

          <PersonalSummaryForm
            data={cvData.personalSummary}
            onChange={(val) => updateCvSection("personalSummary", val)}
          />
          <SkillsForm
            data={cvData.skills}
            onChange={(val) => updateCvSection("skills", val)}
          />
          <ExperienceForm
            data={cvData.experience}
            onChange={(val) => updateCvSection("experience", val)}
          />
          <EducationForm
            data={cvData.education}
            onChange={(val) => updateCvSection("education", val)}
          />
          <RefereeForm
            data={cvData.referees}
            onChange={(val) => updateCvSection("referees", val)}
          />

          <CustomizationPanel
            layout={customization.layout}
            font={customization.font}
            color={customization.color}
            onChange={updateCustomization}
          />

          <button onClick={saveCustomization} style={{ marginTop: "10px" }}>
            💾 Save Customization
          </button>
          <button onClick={exportPdf} style={{ marginTop: "10px" }}>
            📄 Export as PDF
          </button>
        </div>

        {/* Right Preview */}
        <div style={{ flex: 2, background: "#fff", padding: "20px" }}>
          <ResumePreview cvData={cvData} customization={customization} />
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          fontSize: "0.9rem",
          color: "#555",
          borderTop: "1px solid #ddd",
          marginTop: "auto",
        }}
      >
        Created by{" "}
        <a
          href="https://github.com/hussein-salim25"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", color: "#0b1e33" }}
        >
          Hussein Salim
        </a>{" "}
        for Odin Projects
      </footer>
    </div>
  );
}
