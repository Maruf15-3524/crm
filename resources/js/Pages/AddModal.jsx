import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function AddModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Add New Organization
                </h2>
            }
        >
            <Head title="Add New Organization" />

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                Add New Organization
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                ✖
                            </button>
                        </div>

                        {/* Modal Content */}
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Organization Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Organization Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Organization Phone
                                </label>
                                <input
                                    type="email"
                                    id="phone"
                                    className="w-full px-3 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                                    placeholder="Phone Number" onkeypress="return isNumberKey(event)"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Contact Person Name
                                </label>
                                <input
                                    type="email"
                                    id="contact_person"
                                    className="w-full px-3 py-2 mt-1 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                                    placeholder="Contact Person Name"
                                />
                            </div>

                            <div className="flex items-center justify-end">
                                <button
                                    onClick={() => (window.location.href = '/dashboard')} // Navigate back to dashboard
                                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 ml-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
