import React, { useRef, useState, useEffect} from 'react';
import { VALIDATION_REGEXES } from '../../utilities/ValidationRegex';
import "./Kyc.scss"
import Navbar from "../../components/Navbar/Navbar"
import JRSInput from '../../components/Input/JRSInput';
const Kyc = () => {
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");

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
    const group4:any = useRef()
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
        localStorage.setItem('formData', JSON.stringify(formData));

    }
    const handleClickPhase3 = async (e: { preventDefault: () => void; }) => {

      group3.current.classList.add('hide')
      group4.current.classList.remove('hide')
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

              <JRSInput
                placeHolder= "Project name"
                validate={{
                  required: "P name field can't be empty",
                }}
              />
              <JRSInput
                placeHolder="Project website link"
                validate={{
                  required: "Project website link field can't be empty",
                  pattern : [VALIDATION_REGEXES.websiteRegex, "This website link seems to be incorrect. Double check."]
                }}
              />
              <JRSInput
                placeHolder="Application login link"
                validate={{
                  required: "Application login link field can't be empty",
                }}
              />
              <JRSInput
                placeHolder="Optional link"
              />
              <input onClick={handleClickPhase2} className="container__KYC__form__group__btn" type='button' value='Submit' />
              </div>

              <div ref={group3} className="container__KYC__form__group hide">
                <h3 className="container__KYC__form__group__title">Project Details</h3>

              <JRSInput
                placeHolder="Project description"
                validate={{
                  required: "Project description field can't be empty",
                }}
              />
              <JRSInput
                placeHolder="Intention for this application. Which goals are you trying to achieve?"
                validate={{
                  required: "Intention field can't be empty",
                }}
              />
              <JRSInput
                type="file"
                placeHolder="Upload your project white paper:"
                validate={{
                  required: "White paper field can't be empty",
                  pattern: [ VALIDATION_REGEXES.fileExtensionRegex, "Invalid file format. Only JPG, JPEG, PNG, and PDF are accepted."]
                }}
              />
              <JRSInput
                type="file"
                placeHolder="Upload your project legal entity paper:"
                validate={{
                  required: "Legal entity paper field can't be empty",
                  pattern: [ VALIDATION_REGEXES.fileExtensionRegex, "Invalid file format. Only JPG, JPEG, PNG, and PDF are accepted."]
                }}
              />
              <JRSInput
                type="file"
                placeHolder="Upload your project optional paper:"
                validate={{
                  required: "Optional paper field can't be empty",
                  pattern: [ VALIDATION_REGEXES.fileExtensionRegex, "Invalid file format. Only JPG, JPEG, PNG, and PDF are accepted."]
                }}
              />
              <JRSInput
                type="number"
                placeHolder="Project token price"
                validate={{
                  required: "Project token price field can't be empty",
                  pattern : [VALIDATION_REGEXES.tokenPriceRegex, "This token price seems to be wrong."]
                }}
              />
              <JRSInput
                type="number"
                placeHolder="Project token supply"
                validate={{
                  required: "Project token supply field can't be empty",
                  pattern : [VALIDATION_REGEXES.tokenSupplyReegx, "This token supply seems to be wrong."]
                }}
              />
              <JRSInput
                type="number"
                placeHolder="Project token sale cap"
                validate={{
                  required: "Project token sale cap field can't be empty",
                  pattern : [VALIDATION_REGEXES.tokenCapRegex, "This token sale cap seems to be wrong."]
                }}
              />
               <JRSInput
                placeHolder="Project token start date YYYY/MM/DD"
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              
              <input onClick={handleClickPhase3} className="container__KYC__form__group__btn" type='button' value='Submit' />
              </div>

               <div ref={group4} className="container__KYC__form__group hide">
                <h3>Completed!</h3>
                <p>Thank you for your application. We will review your project and get back to you as soon as possible.</p>
               </div>
             </form>
       </div>
       </>
    )
}

export default Kyc