export default function ContactForm() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl text-black font-bold text-center mb-8">Contact Us</h2>
          {/* Green Box */}
          <div className="bg-green-700 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
            {/* Contact Form Inputs */}
            <form className="max-w-lg mx-auto">
                {/* Name Field */}
                <div className="mb-6">
                    <label htmlFor="name" className="block text-white text-lg font-semibold mb-2">
                        Your Name
                    </label>
                    <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                    />
                </div>
                {/* Email Field */}
                <div className="mb-6">
                    <label htmlFor="email" className="block text-white text-lg font-semibold mb-2">
                        Your Email
                    </label>
                    <input 
                        type="text" 
                        placeholder="john@example.com" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                    />
                </div>
                {/* Message Field */}
                <div className="mb-6">
                    <label htmlFor="message" className="block text-white text-lg font-semibold mb-2">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="How can we help you?"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        rows={4}
                    ></textarea>
                </div>
                {/* Submit Button */}
                <div className="text-center">
                    <button 
                        type="submit" 
                        className="bg-yellow-400 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                    >
                        Send Message
                    </button>
                </div>
            </form>
          </div>
        </div>
      </section>
    );
  }