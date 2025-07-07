import { MailIcon, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const onSubmit = async () => {
    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setToastMessage("Please fill in all fields.");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setToastMessage("Please enter a valid email address.");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setToastMessage("Message sent successfully! I'll get back to you soon.");
      setToastType("success");
      setShowToast(true);
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 4000);
    }, 1500);
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto space-y-16 mb-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-white mb-4 font-sans tracking-tight font-medium">
            Get In{" "}
            <span className="bg-gradient-to-r to-blue-300 from-emerald-500 mb-8 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to discussing new opportunities.
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center md:items-start gap-10 p-6">
          <div className="w-full md:flex-1">
            <h3 className="text-xl font-medium text-white text-center mb-6">
              Contact Information
            </h3>
            <div className="flex flex-col items-start gap-10">
              <div>
                <div className="flex items-center gap-6">
                  <div className="w-12 aspect-square bg-neutral-200 rounded-full flex items-center justify-center">
                    <MailIcon className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-white">Email</p>
                    <p className="text-gray-300">harshit15gg@gmail.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="w-12 aspect-square bg-neutral-200 rounded-full flex items-center justify-center">
                    <Phone className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-white">Phone</p>
                    <a
                      href="tel:7417227258"
                      className="text-gray-300 hover:text-blue-300 transition-colors"
                    >
                      +91 7417227258
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Effect Form Section */}
          <div className="w-full md:flex-1">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-medium text-white text-center mb-6">
                Send Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="button"
                  onClick={onSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-2">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm border ${
              toastType === "success"
                ? "bg-green-500/20 border-green-400/30 text-green-100"
                : "bg-red-500/20 border-red-400/30 text-red-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  toastType === "success" ? "bg-green-400" : "bg-red-400"
                }`}
              />
              <span className="text-sm font-medium">{toastMessage}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
