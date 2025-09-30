import React, { useState } from "react";

const Contact=()=> {
    const [form, setForm] = useState({
        name: "",
        email: "",
        details: "",
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent");
    };
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard");
    };
    return (
        <div className="bg-gray-100 min-h-screen 'px-8 md:px-20 py-16" id="contact">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 px-6">
                <div>
                    <h2 className="text-6xl font-bold text-gray-900 mb-4">
                        About Devflx
                    </h2>
                    <p className="text-gray-500 text-xl">
                        We’re a senior collective turning complex ideas into elegant digital
                        products. From strategy and design to delivery and operations — we
                        partner for outcomes, not just output.
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 rounded-lg shadow-sm">
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium text-gray-800">info@devflx.com</p>
                        </div>
                        <button
                            onClick={() => handleCopy("info@devflx.com")}
                            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100" >Copy
                        </button>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg shadow-sm">
                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium text-gray-800">+92 314 8640651</p>
                        </div>
                        <button
                            onClick={() => handleCopy("+923148640651")}
                            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100" >
                            Copy
                        </button>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded-lg shadow-sm  space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Your name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Jane Doe"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full mt-1 px-3 py-2 shadow-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@company.com"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full mt-1 px-3 py-2 shadow-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Project details
                            </label>
                            <textarea
                                name="details"
                                placeholder="A short brief about your project and goals"
                                value={form.details}
                                onChange={handleChange}
                                rows="4"
                                className="w-full mt-1 px-3 py-2 shadow-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                    </form>
                        <button
                            type="submit"
                            className=" py-3 p-4 rounded-md font-semibold text-white bg-gray-900 hover:bg-gray-800 transition">
                            Send message
                        </button>
                        <p>Prefer a quick chat? We’ll reply within 24 hours.</p>
                </div>
            </div>
        </div>
    );
}
export default Contact