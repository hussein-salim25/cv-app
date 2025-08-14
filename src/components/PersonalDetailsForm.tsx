import { PersonalDetails } from "../types";

interface Props {
  data: PersonalDetails;
  onChange: (value: PersonalDetails) => void;
}

export default function PersonalDetailsForm({ data, onChange }: Props) {
  return (
    <section>
      <h2>Personal Details</h2>
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
