import React, { useState } from 'react';
import Image from 'next/image';
import close from '../../../../public/images/header/close.svg';

const Form = ({ setShowPopup }) => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        termsAccepted: false
    });

    const [isFocused, setIsFocused] = useState(false);
    const [isPhoneNumberComplete, setIsPhoneNumberComplete] = useState(false);

    const handleChange = (e) => {
        // Restrict input to only numbers and limit to 10 digits
        const phoneNumber = e.target.value.replace(/\D/g, '').slice(0, 10);
        setFormData({ ...formData, phoneNumber });
        setIsPhoneNumberComplete(phoneNumber.length === 10);
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, termsAccepted: e.target.checked });
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare the form data to be submitted
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('phoneNumber', formData.phoneNumber);
        formDataToSubmit.append('termsAccepted', formData.termsAccepted);

        // If phone number is complete, close the form
        if (isPhoneNumberComplete) {
            setShowPopup(false);
        }
    };

    return (
        <div className="bg-[#1B1B1BCC] fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-blackish text-whitish sm:w-[450px] w-[90vw] p-6 rounded-3xl relative">
                <h2 className="text-lg font-semibold mb-4">What’s your phone number?</h2>
                <button onClick={handleClose} className="absolute top-0 right-0 m-2">
                    <Image src={close} alt='Close Button' className='w-10' />
                </button>
                <form onSubmit={handleSubmit}>
                    {/* Phone number input */}
                    <label className={isFocused || formData.phoneNumber.length > 0 ? 'visible text-[12px] ml-2 text-grayDark font-medium' : 'invisible'}>Mobile number*</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder={isFocused || formData.phoneNumber.length > 0 ? '' : 'Mobile number*'}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        maxLength={10} // Limit to 10 characters
                        pattern="[0-9]*" // Allow only numbers
                        required
                        className="block w-full border-b border-[#8F8F8F] mb-2 px-2 focus:outline-none bg-transparent text-whitish font-medium"
                    />
                    <div className='text-[12px] text-[#8F8F8F]'>We’ll send a confirmation code here</div>

                    <div className={`${isPhoneNumberComplete ? 'visible' : 'invisible'} text-[12px] text-[#8F8F8F] mt-16`}>By selecting “Continue”, you agree to the <span className=' underline cursor-pointer'>Terms of Service</span> and <span className=' underline cursor-pointer'>Privacy Policies</span>.</div>

                    <button
                        type="submit"
                        className={`border border-[#8F8F8F] px-7 py-4 rounded-full mt-4 w-full ${isPhoneNumberComplete ? 'bg-blueish border-blueish text-blackish font-semibold duration-700' : 'text-[#8F8F8F]'}`}
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;