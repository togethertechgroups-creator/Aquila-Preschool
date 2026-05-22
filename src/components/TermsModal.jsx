import React, { useEffect } from 'react';

const TermsModal = ({ isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Vertical centering trick */}
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      {/* Modal content */}
      <div 
        className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-5 border-b pb-4">
            <h3 className="text-2xl font-heading font-bold text-[#0D1B4B]" id="modal-title">
              Terms & Conditions
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mt-2 text-gray-700 space-y-4 text-sm leading-relaxed text-left">
            <p className="font-semibold text-lg text-[#0D1B4B]">Aquila Montessori Pre-School Admission & General Policy</p>
            
            <div>
              <h4 className="font-bold text-[#F44336]">1. Admission Policy</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Admission is confirmed only after submission of the completed admission form and payment of the applicable fees.</li>
                <li>Parents must provide accurate information and valid documents during admission.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F44336]">2. Fee Policy</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Fees once paid are non-refundable and non-transferable.</li>
                <li>Fees must be paid on or before the due date mentioned by the school.</li>
                <li>Annual fees and registration fees are compulsory unless otherwise informed.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F44336]">3. Attendance & Timings</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Regular attendance is encouraged for the child's learning and development.</li>
                <li>Parents are requested to follow the school timings strictly.</li>
                <li>Late pick-up beyond the grace period may result in additional charges.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F44336]">4. Health & Safety</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Parents must inform the school about any allergies, medical conditions, or special needs of the child.</li>
                <li>Sick children should not be sent to school.</li>
                <li>In case of emergency, the school will provide first aid and contact the parent/guardian immediately.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F44336]">5. Parent Cooperation</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Parents are expected to maintain respectful communication with staff and management.</li>
                <li>Participation in meetings, events, and school activities is encouraged.</li>
                <li>Any concerns should be addressed directly with the school administration.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F44336]">6. Photographs & Media</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>By admitting your child to Aquila, you are deemed to have given consent for the usage of your child's photographs/videos for educational displays, school events, social media, or promotional purposes.</li>
                <li>You are at liberty to revoke this permission/consent at any point of time by giving a written/email request to the school. Photographs/videos taken and posted or used till the date of such request will not be removed or taken down.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F44336]">7. Holidays & Closures</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>The school calendar and holiday list will be shared at the beginning of the academic year.</li>
                <li>The school may remain closed during emergencies, government orders, or unforeseen situations.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F44336]">8. Personal Belongings</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Parents are requested to label all belongings clearly.</li>
                <li>The school is not responsible for loss or damage of personal items brought to school.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F44336]">9. Withdrawal Policy</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>One month's written notice must be given for withdrawal of the child.</li>
                <li>Transfer certificates or records will be issued only after clearance of dues.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F44336]">10. Policy Changes</h4>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>The school reserves the right to modify rules, policies, fees, or timings whenever necessary.</li>
                <li>Parents will be informed regarding major changes.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse border-t">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-2 bg-[#0D1B4B] text-base font-medium text-white hover:bg-[#1a2b6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D1B4B] sm:ml-3 sm:w-auto sm:text-sm transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
