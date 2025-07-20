// import axios from "axios";
// import { useState } from "react";

// export default function BookingForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     cardNumber: "",
//     expirationDate: "",
//     cvv: "",
//     billingAddress: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//      await axios.post("/api/bookings", formData);
//       alert("Booking confirmed!");
//     } catch {
//       setError("Failed to submit booking.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="firstName"
//         value={formData.firstName}
//         onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//       />

//       <button type="submit" disabled={loading}>
//         {loading ? "Processing..." : "Confirm & Pay"}
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//     </form>
//   );
// }
import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields example */}
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
        placeholder="First Name"
        required
      />
      {/* Add remaining fields similarly */}

      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
