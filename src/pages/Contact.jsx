import React, { useState } from "react";

const Contact = () => {
  const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3_KEY, // Web3Forms access key
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }

      alert("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      alert(`Submission failed ❌: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 px-4" id="contact">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Contact <span className="font-light underline underline-offset-4">With Us</span>
        </h1>
        <p className="mt-2 text-gray-600">
          We'd love to hear from you. Contact us today.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                onChange={handleChange}
                value={formData.name}
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              name="message"
              rows="4"
              placeholder="Write your message here..."
              required
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-2 rounded-md transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
