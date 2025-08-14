interface GeneralInfoData {
  name: string;
  email: string;
  phone: string;
}

interface GeneralInfoFormProps {
  data: GeneralInfoData;
  onChange: (updated: GeneralInfoData) => void;
}

export default function GeneralInfoForm({ data, onChange }: GeneralInfoFormProps) {
  return (
    <section>
      <h2>General Information</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => onChange({ ...data, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => onChange({ ...data, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => onChange({ ...data, phone: e.target.value })}
      />
    </section>
  );
}
