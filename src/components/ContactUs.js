const ContactUs = () => {
    return (
        <div className="max-w-screen-md mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-lg text-gray-700 text-center mb-4">We're here to help! Reach out to us through the information below.</p>

            <div className="flex flex-col items-center">
                <div className="bg-white p-6 rounded-lg shadow-md w-full mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Phone</h2>
                    <p className="text-gray-700">📞 123-456-7809</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md w-full mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Email</h2>
                    <p className="text-gray-700">📧 contact@restaurant.com</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md w-full">
                    <h2 className="text-2xl font-semibold mb-2">Address</h2>
                    <p className="text-gray-700">🏢 123 Main Street, Suite 456, Your City, Country</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
