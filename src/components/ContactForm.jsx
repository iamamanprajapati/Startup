import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import { countryCodeWithFlag, servicesData } from "../assets/data";
import { IoIosArrowDown } from "react-icons/io";

// Zod schema
const contactSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(12, "Phone number must be at most 12 digits"),
  service: z.string().min(1, "Please select a service"),
  about: z.string().min(10, "Please tell us something about your project"),
  country: z.string().min(1, "Please select a country"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/add-contact`,
        data
      );
      if (!response.data.success) {
        toast.error("Submission failed");
        return;
      }
      toast.success("Query submitted successfully.");
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-2xl font-semibold text-gray-300">
          Tell Us What You Need
        </p>
      </div>

      {/* Name & Email */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-8 mt-12">
        <div className="flex flex-col w-full">
          <label className="text-xs text-gray-600">
            Your Name/Company Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register("name")}
            placeholder="Enter your name"
            className="w-full p-2 bg-gray-300/10 border border-gray-700 rounded-md mt-2 text-gray-400 text-sm"
          />
          {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col w-full">
          <label className="text-xs text-gray-600">
            Your Email <span className="text-red-400">*</span>
          </label>
          <input
            {...register("email")}
            placeholder="Enter your email"
            className="w-full p-2 bg-gray-300/10 border border-gray-700 rounded-md mt-2 text-gray-400 text-sm"
          />
          {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col w-full mt-4">
        <label className="text-xs text-gray-600">
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input
          {...register("phoneNumber")}
          placeholder="Enter phone number"
          className="w-full p-2 bg-gray-300/10 border border-gray-700 rounded-md mt-2 text-gray-400 text-sm"
        />
        {errors.phoneNumber && (
          <span className="text-red-400 text-xs">{errors.phoneNumber.message}</span>
        )}
      </div>

      {/* Service */}
      <div className="flex flex-col w-full mt-4">
        <label className="text-xs text-gray-600">
          I Need <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <select
            {...register("service")}
            className="w-full p-2 bg-gray-300/10 border border-gray-700 rounded-md mt-2 text-gray-400 text-sm"
          >
            <option value="">Select a service</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          <div className="absolute top-1/2 right-4 -translate-y-1/4">
            <IoIosArrowDown className="text-gray-400" />
          </div>
        </div>
        {errors.service && (
          <span className="text-red-400 text-xs">{errors.service.message}</span>
        )}
      </div>

      {/* About */}
      <div className="flex flex-col w-full mt-4">
        <label className="text-xs text-gray-600">
          About Your Project <span className="text-red-400">*</span>
        </label>
        <textarea
          {...register("about")}
          placeholder="Tell us about your project"
          className="w-full h-[150px] p-2 bg-gray-300/10 border border-gray-700 rounded-md mt-2 text-gray-400 text-sm"
        />
        {errors.about && (
          <span className="text-red-400 text-xs">{errors.about.message}</span>
        )}
      </div>

      {/* Country */}
      <div className="flex flex-col w-full mt-4 relative">
        <label className="text-xs text-gray-600">
          Country <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <select
            {...register("country")}
            className="w-full p-2 bg-gray-300/10 border border-gray-700 rounded-md mt-2 text-gray-400 text-sm"
          >
            <option value="">Select your country</option>
            {countryCodeWithFlag.map((c) => (
              <option key={c.name} value={c.name}>
                {c.flag} {c.code}, {c.name}
              </option>
            ))}
          </select>
          <div className="absolute top-1/2 right-4 -translate-y-1/4">
            <IoIosArrowDown className="text-gray-400" />
          </div>
        </div>
        {errors.country && (
          <span className="text-red-400 text-xs">{errors.country.message}</span>
        )}
      </div>

      {/* Submit */}
      <div className="w-full mt-12">
        <button
          type="submit"
          disabled={isSubmitting}
          className="white bg-colortext hover:bg-colortext/50 transition-all duration-200 rounded-md w-full p-2 font-semibold cursor-pointer"
        >
          {isSubmitting ? "Please Wait..." : "Send My Request"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

