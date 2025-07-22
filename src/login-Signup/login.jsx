
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Login(){
    return(
        <div>
  
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl flex overflow-hidden">
        
        {/* Left Panel */}
        <div className="bg-gray-50 p-8 w-full max-w-md border-r border-gray-200 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4">Chat with us</h2>
            <p className="text-sm text-gray-500 mb-6">Speak to our friendly team via live chat.</p>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-2"><FaEnvelope /> <a href="#">Shoot us an email</a></li>
              <li className="flex items-center gap-2"><FaTwitter /> <a href="#">Message us on Twitter</a></li>
            </ul>

            <h3 className="mt-10 text-lg font-semibold">Call us</h3>
            <p className="text-sm text-gray-500">Call our team Mon–Fri from 8am to 5pm.</p>
            <p className="mt-1 font-medium text-gray-700"><FaPhone className="inline mr-1" /> +1 (555) 000-0000</p>

            <h3 className="mt-10 text-lg font-semibold">Visit us</h3>
            <ul className="text-sm text-gray-700 space-y-1 mt-1">
              <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" /> 100 Smith Street, Collingwood VIC 3066</li>
              <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" /> 128 Clarence Street, Sydney NSW 2000</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-10">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-10 w-full flex flex-col justify-center">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full" />
            <h2 className="text-2xl font-semibold">How do we get in touch?</h2>
            <p className="text-gray-500 text-sm mt-1">Leave us your details and we’ll reach out within 24 hours!</p>
          </div>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First name" className="w-1/2 px-4 py-2 border rounded-md focus:outline-none bg-gray-200" />
              <input type="text" placeholder="Last name" className="w-1/2 px-4 py-2 border rounded-md focus:outline-none bg-gray-200" />
            </div>
            <input type="email" placeholder="Enter email" className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-200" />
            <div className="flex">
            
              <input type="password" placeholder="password" className="w-full px-4 py-2 border-t border-b border-r rounded-r-md focus:outline-none bg-gray-200" />
            </div>
            <textarea placeholder="Leave us a message..." className="bg-gray-200 w-full px-4 py-2 border rounded-md resize-none focus:outline-none h-32"></textarea>
            <div>
                <p>Don't have an account? <Link to="/login-Signup" className="sign-up-btn">Sign-up</Link></p>
            </div>

            <div className="flex justify-between items-center">
              <button type="button" className="flex items-center text-sm text-gray-600"><FaArrowLeft className="mr-1" /> Go back</button>
              <button type="submit" className="px-6 py-2 bg-black text-white rounded-md">Finish</button>
            </div>
          </form>
        </div>
      </div>
    </div>


        </div>
    )
}