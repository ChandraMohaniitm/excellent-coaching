import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
  Select,
} from "flowbite-react";
import { useState } from "react";

const FindTutorModal = ({ open, onClose }) => {
  const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    studentClass: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3_KEY, // Web3Forms access key
          subject: "New Tutor Request",
          sender_name: formData.name,
          sender_email: formData.contact,
          message: `Name: ${formData.name}\nContact: ${formData.contact}\nClass: ${formData.studentClass}\nAddress: ${formData.address}`,
          data: formData,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed");

      alert("Tutor request submitted successfully ✅");
      setFormData({ name: "", contact: "", studentClass: "", address: "" }); // reset form
      onClose();
    } catch (err) {
      alert(`Submission failed ❌: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={open} size="md" popup onClose={onClose} className=" mt-30 md:mt-15 mr-4 flex items-center justify-center">
      <ModalHeader>Find a Tutor</ModalHeader>

      <ModalBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <Label htmlFor="name" value="Your Name" />
            <TextInput
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Contact */}
          <div>
            <Label htmlFor="contact" value="Contact Number" />
            <TextInput
              id="contact"
              name="contact"
              placeholder="Phone number or Email"
              required
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          {/* Dropdown for Class */}
          <div>
            <Label htmlFor="studentClass" value="Student Class" />
            <Select
              id="studentClass"
              name="studentClass"
              required
              value={formData.studentClass}
              onChange={handleChange}
            >
              <option value="">Select class</option>
              <option value="Class 1–5">Class 1–5</option>
              <option value="Class 6–8">Class 6–8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
              <option value="Competitive Exams">Competitive Exams</option>
            </Select>
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address" value="Address" />
            <TextInput
              id="address"
              name="address"
              placeholder="Your address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button color="gray" type="submit" disabled={loading} className="w-full">
              {loading ? "Submitting..." : "Submit"}
            </Button>

            <Button color="red" type="button" onClick={onClose} className="w-full">
              Cancel
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default FindTutorModal;
