import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import ModalContent from './ModalContent'; // Import the modal content component

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <AuthenticatedLayout
            // header={
            //     <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            //         Dashboard
            //     </h2>
            // }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                        <button
                            onClick={openModal}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ModalContent isOpen={isModalOpen} onClose={closeModal} />
        </AuthenticatedLayout>
    );
}
