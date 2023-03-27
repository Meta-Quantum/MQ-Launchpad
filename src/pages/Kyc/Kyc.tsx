import React, { useRef, useState, useEffect} from 'react';
import { VALIDATION_REGEXES } from '../../utilities/ValidationRegex';
import "./Kyc.scss"
import Navbar from "../../components/Navbar/Navbar"
import JRSInput from '../../components/Input/JRSInput';
const Kyc = () => {
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

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

    const handleClickPhase1 = async (e: { preventDefault: () => void; }) => {

        if(!isValid()) return;
        group.current.classList.add('hide')
        group2.current.classList.remove('hide')
        item1.current.classList.remove('active')
        item2.current.classList.add('active')
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    const handleClickPhase2 = async (e: { preventDefault: () => void; }) => {

        group2.current.classList.add('hide')
        group3.current.classList.remove('hide')
        item2.current.classList.remove('active')
        item3.current.classList.add('active')
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

      function isValid(){
        group.current.wasTouched
        const valid = group.current.error
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
                  placeHolder= "Your name"
                  validate={{
                    required: "First name field can't be empty",
                  }}
                />
                <JRSInput
                  placeHolder= "Email"
                  validate={{
                    required: "Email field can't be empty",
                    pattern: [VALIDATION_REGEXES.emailRegex, "Email address not valid"]
                  }}
                />
                <JRSInput
                  placeHolder= "Telegram handle"
                />
                <JRSInput
                  type="password"
                  placeHolder= "Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  validate={{
                    required: "Password can't be empty",
                    pattern: [VALIDATION_REGEXES.passwordRegex, "Password not valid: It must be 10 characters long, at least one capital letter, one number and one special character from the set !-?%&<>£$;^."]
                  }}
                />
                <JRSInput
                  type="password"
                  placeHolder= "Confirm password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  validate={{
                    required: "Password confirmation can't be empty",
                    match: [
                      (value) => value === password,
                      "The two passwords don't match.",
                      ]
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