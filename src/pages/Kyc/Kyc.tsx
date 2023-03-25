import React, { useRef, useState, useEffect} from 'react';

import "./Kyc.scss"
import Navbar from "../../components/Navbar/Navbar"
import JRSInput from '../../components/Input/JRSInput';
const Kyc = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telegram: '',
        projectName: '',
        projectWebsite: '',
        projectDescription: '',
        tokenPrice: '',
        tokenSupply: '',
        tokenCap: '',
        startDate: '',
      });

    const group:any = useRef()
    const group2:any = useRef()
    const group3:any = useRef()
    const item1:any = useRef()
    const item2:any = useRef()
    const item3:any = useRef()

    const firstNameRef = useRef(null);

    const handleClickPhase1 = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(!isValid()) return;
        group.current.classList.add('hide')
        group2.current.classList.remove('hide')
        item1.current.classList.remove('active')
        item2.current.classList.add('active')
       
        localStorage.setItem('formData', JSON.stringify(formData));
       
    }

    const handleClickPhase2 = (event: { preventDefault: () => void; }) => {
        group2.current.classList.add('hide')
        group3.current.classList.remove('hide')
        item2.current.classList.remove('active')
        item3.current.classList.add('active')
        event.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
    }
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
    
      useEffect(() => {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
          setFormData(savedFormData);
        }
      }, []);

      const focusFirstInvalid = () => {
        if (firstNameRef.current.focusNotValidated()) return;
      }
      function isValid(){
        firstNameRef.current.wasTouched
        focusFirstInvalid();
        const valid = firstNameRef.current.error
        return !valid;
      }

    return(
        <>
        <Navbar />
           <div className='container__KYC'>
            <div className='container__KYC__nav'>
                <p ref={item1} className="container__KYC__nav__item active">Register</p>
                <p ref={item2} className="container__KYC__nav__item">Fill in the details</p>
                <p ref={item3} className="container__KYC__nav__item">Complete</p>
            </div>
             <form className="container__KYC__form">
               <div ref={group} className="container__KYC__form__group">
                <div className="container__KYC__form__group__wrap">
                <h3 className="container__KYC__form__group__wrap__title">Start Application</h3>
                <h5 className="container__KYC__form__group__wrap__subtitle">Blockchain project applications ONLY</h5>
                </div>
                <JRSInput
                  ref={firstNameRef}
                  inputVal={formData?.name}
                  placeHolder= "Your name"
                  validate={{
                    required: "First name field can't be empty",
                  }}
                />
                <JRSInput
                  inputVal={formData?.email}
                  placeHolder= "Email"
                  validate={{
                    required: "Email field can't be empty",
                  }}
                />
                <JRSInput
                  inputVal={formData?.telegram}
                  placeHolder= "Telegram handle"
                />
                <JRSInput
                  type = "90password"
                  placeHolder= "Enter a password"
                  validate={{
                    required: "Password field can't be empty",
                  }}
                />
                  <span>6 characters minimum</span>
                  <JRSInput
                  placeHolder= "Confirm password"
                  validate={{
                    required: "Password confirmation can't be empty",
                  }}
                />
                  <input onClick={handleClickPhase1} className="container__KYC__form__group__btn" type='button' value='Next' />
               </div>
         
                <div ref={group2} className="container__KYC__form__group hide">
                <h3 className="container__KYC__form__group__title">Project Details</h3>
            
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type="text" placeholder='Project name' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type="text" placeholder='Project website link' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type="text" placeholder='Application login link' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type="text" placeholder='Optional link' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type="text" placeholder='Project description' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type="text" placeholder='Intention for this application. Which goals are you trying to achieve?' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type='file' placeholder='Upload your project white paper:' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type='file' placeholder='pload your project legal entity paper:' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type='file' placeholder='Upload your project optional paper:' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type='number' placeholder='Project token price' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type='number' placeholder='Project token supply' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type='number' placeholder='Project token sale cap' />
                <input className="container__KYC__form__group__input" onChange={handleInputChange} type='date' placeholder='Project token sale start date' />
                <input onClick={handleClickPhase2} className="container__KYC__form__group__btn" type='button' value='Submit' />
               </div>


               <div ref={group3} className="container__KYC__form__group hide">
                <h3>Completed!</h3>
                <p>Thank you for your application. We will review your project and get back to you as soon as possible.</p>
               </div>
             </form>
       </div>
       </>
    )
}

export default Kyc