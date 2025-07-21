
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const  SignUp=()=> {



  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    parentName: "",
    email: "",
    pinCode: "",
    dob: null,
    country: "",
    phone: "",
    timeZone: "IST - Indian Standard Time - GMT +5:30",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, dob: date }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Required";
    if (!formData.lastName) newErrors.lastName = "Required";
    if (!formData.gender) newErrors.gender = "Required";
    if (!formData.dob) newErrors.dob = "Required";
    if (!formData.parentName) newErrors.parentName = "Required";
    if (!formData.email) newErrors.email = "Required";
    if (!formData.pinCode) newErrors.pinCode = "Required";
    if (!formData.country) newErrors.country = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
    }
  };

    // Render the component

  return (
  <div className=" bg-gray-100 flex ">

  <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-8 bg-white rounded shadow"
    >
      <h2 className="text-2xl font-semibold mb-6">Let’s get you started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border p-2 bg-gray-100"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border p-2 bg-gray-100"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        <div>
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-2 bg-gray-100"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        <div>
          <label>Date of Birth</label>
          <DatePicker
            selected={formData.dob}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/MM/yyyy"
            className="w-full border p-2 bg-gray-100"
          />
          {errors.dob && <p className="text-red-500 text-sm">Please enter date of birth</p>}
        </div>

        <div>
          <label>Present Address</label>
          <input
            type="text"
            name="PreAddress"
            value={formData.parentName}
            onChange={handleChange}
            className="w-full border p-2 bg-gray-100"
          />
          {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName}</p>}
        </div>

        <div>
          <label>Permanent Address</label>
          <input
            type="text"
            name="perAddress"
            onChange={handleChange}
            className="w-full border p-2 bg-gray-100"
          />
        </div>

        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 bg-gray-100"
          />
          {errors.email && <p className="text-red-500 text-sm ">{errors.email}</p>}
        </div>

        <div>
          <label>Pin Code</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            className="w-full border p-2 bg-gray-100"
          />
          {errors.pinCode && <p className="text-red-500 text-sm  bg-gray-100">{errors.pinCode}</p>}
        </div>

        <div>
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border p-2  bg-gray-100"
          >
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2  bg-gray-100"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="md:col-span-2">
          <label>Time Zone</label>
          <input
            type="text"
            name="timeZone"
            value={formData.timeZone}
            disabled
            className="w-full border p-2 bg-gray-100"
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <button type="submit" className="bg-black text-white px-6 py-2 rounded">
          Next
        </button>
      </div>
    </form>

  </div>
  );

};

export default SignUp;