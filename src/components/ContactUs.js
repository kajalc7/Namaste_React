const ContactUs = () => {
    return (
        <div className="max-w-screen-md mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2"
                placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2"
                 placeholder="message"/>
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
