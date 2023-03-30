import React, { useRef, useState, useEffect} from 'react';
import bcrypt from 'bcryptjs';
import { VALIDATION_REGEXES } from '../../utilities/ValidationRegex';
import "./Kyc.scss"
import Navbar from "../../components/Navbar/Navbar"
import JRSInput from '../../components/Input/JRSInput';
const Kyc = () => {
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");
  const [step, setStep] = useState(1);

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
  const group5:any = useRef()
  const item1:any = useRef()
  const item2:any = useRef()
  const item3:any = useRef()
  const item4:any = useRef()
  const item5:any = useRef()

  //required fields
  const nameRef: any = useRef()
  const emailRef: any = useRef()
  const projectNameRef: any = useRef()
  const projectWebsiteRef: any = useRef()
  const applicationLinkRef: any = useRef()
  const projectDescriptionRef: any = useRef()
  const intentionDescriptionRef: any = useRef()
  const legalEntityPaperRef: any = useRef()
  const whitePaperRef: any = useRef()
  const tokenPriceRef: any = useRef()
  const tokenSaleCapRef: any = useRef()
  const tokenSupplyRef: any = useRef()
  const tokenStartDateRef: any = useRef()

  const groups = [group, group2, group3, group4, group5];
  const items = [item1, item2, item3, item4, item5];
  const currentGroup = groups[step - 1];
  const nextGroup = groups[step];
  const currentItem = items[step - 1];
  const nextItem = items[step];

  const isValid = () => {
    const requiredFields = [
      [nameRef, emailRef],
      [projectNameRef, projectWebsiteRef, applicationLinkRef],
      [projectDescriptionRef, intentionDescriptionRef, whitePaperRef],
      [tokenPriceRef, legalEntityPaperRef, tokenSaleCapRef, tokenSupplyRef, tokenStartDateRef],
    ];
  
    let allFieldsValid = true;
    const fieldsToCheck = requiredFields[step - 1];
  
    for (const fieldRef of fieldsToCheck) {
      if (fieldRef.current.focusNotValidated() || fieldRef.current.error) {
        allFieldsValid = false;
      }
    }
  
    if (password !== confirmPassword || !VALIDATION_REGEXES.passwordRegex.test(password) || !VALIDATION_REGEXES.passwordRegex.test(confirmPassword)) {
      allFieldsValid = false;
    }
    return allFieldsValid;
  };

  const nextPhase = (e: any) => {  

    if(!isValid()) return;
    e.preventDefault();

    currentGroup.current.classList.add('hide');
    nextGroup.current.classList.remove('hide');
    currentItem.current.classList.remove('active');
    nextItem.current.classList.add('active');
  
    setStep(step + 1);
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  const submit = async (e: { preventDefault: () => void; }) => {

    if(!isValid()) return;
    e.preventDefault();

    const hashedPassword = await bcrypt.hash(password, 10); 
    const formDataWithHashedPassword = { ...formData, password: hashedPassword };

    console.log("submit");
    group4.current.classList.add('hide');
    group5.current.classList.remove('hide');
    item4.current.classList.remove('active');
    item5.current.classList.add('active');
  
    localStorage.setItem('formData', JSON.stringify(formDataWithHashedPassword));

    // TODO : send data to DB
/*    const data = {
      name: formData.name,
      email: formData.email,
      telegram: formData.telegram,
      projectName: formData.projectName, 
      projectWebsite: formData.projectWebsite,
      projectDescription: formData.projectDescription,
      tokenPrice: formData.tokenPrice,
      tokenSupply: formData.tokenSupply,
      tokenCap: formData.tokenCap,
      startDate: formData.startDate,
    } */
  
  }

  useEffect(() => {
      const savedFormData = JSON.parse(localStorage.getItem('formData'));
      if (savedFormData) {
        setFormData(savedFormData);
      }
  }, []);

  //show group on click on nav item 
  const showGroup = (event: any) => {
    const clickedItem = event.target.closest("p");
    const clickedIndex = items.findIndex((item) => item.current.isSameNode(clickedItem));
    

    if (clickedIndex >= 0 && clickedIndex < step - 1) {
      setStep(clickedIndex + 1);
      groups.forEach((group, i) => {
        if (i === clickedIndex) {
          group.current.classList.remove('hide');
          items[i].current.classList.add('active');
        } else {
          group.current.classList.add('hide');
          items[i].current.classList.remove('active');
        }
      });
    } else if (clickedIndex === step - 1) {
      currentGroup.current.classList.remove('hide');
      currentItem.current.classList.add('active');
    } else if (clickedIndex === step) {
      nextPhase(event);
    }
  };
                     
  return(
      <>
      <Navbar />
        <div className='container__KYC'>
          <div className='container__KYC__nav'>
              <p ref={item1} onClick={showGroup} className="container__KYC__nav__item active">Register</p>
              <p ref={item2} onClick={showGroup} className="container__KYC__nav__item">Project details</p>
              <p ref={item3} onClick={showGroup} className="container__KYC__nav__item">Project papers</p>
              <p ref={item4} onClick={showGroup} className="container__KYC__nav__item">Project token</p>
              <p ref={item5} className="container__KYC__nav__item">Complete</p>
          </div>
            <form className="container__KYC__form">
              <div ref={group} className="container__KYC__form__group">
                <div className="container__KYC__form__group__wrap">
                  <h3 className="container__KYC__form__group__wrap__title">Start Application</h3>
                  <h5 className="container__KYC__form__group__wrap__subtitle">Blockchain project applications ONLY</h5>
                </div>
                  <JRSInput
                    ref={nameRef}
                    placeHolder= "Your name"
                    validate={{
                      required: "First name field can't be empty",
                    }}
                  />
                  <JRSInput
                    ref={emailRef}
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
                      pattern: [VALIDATION_REGEXES.passwordRegex, "Password not valid: It must be 10 characters long, at least one capital letter, one number and one special character from the set !-?%&<>£$;^."],
                      
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
                  <input onClick={nextPhase} className="container__KYC__form__group__btn" type='button' value='Next' />
              </div>
              
        
                <div ref={group2} className="container__KYC__form__group hide">
                <h3 className="container__KYC__form__group__title">Project Details</h3>
                <JRSInput
                  ref={projectNameRef}
                  placeHolder= "Project name"
                  validate={{
                    required: "P name field can't be empty",
                  }}
                />
                <JRSInput
                  ref={projectWebsiteRef}
                  placeHolder="Project website link"
                  validate={{
                    required: "Project website link field can't be empty",
                    pattern : [VALIDATION_REGEXES.websiteRegex, "This website link seems to be incorrect. Double check."]
                  }}
                />
                <JRSInput
                  ref={applicationLinkRef}
                  placeHolder="Application login link"
                  validate={{
                    required: "Application login link field can't be empty",
                  }}
                />
                <JRSInput
                  placeHolder="Optional link"
                />
                <input onClick={nextPhase} className="container__KYC__form__group__btn" type='button' value='Next' />
              </div>
              
              <div ref={group3} className="container__KYC__form__group hide">
                <h3 className="container__KYC__form__group__title">Project Papers</h3>
                <JRSInput
                  ref={projectDescriptionRef}
                  placeHolder="Project description"
                  validate={{
                    required: "Project description field can't be empty",
                  }}
                />
                <JRSInput
                  ref={intentionDescriptionRef}
                  placeHolder="Intention for this application. Which goals are you trying to achieve?"
                  validate={{
                    required: "Intention field can't be empty",
                  }}
                />
                <JRSInput className='file'
                  ref={whitePaperRef}
                  type="file"
                  label="Upload your project white paper:"
                  validate={{
                    required: "White paper field can't be empty",
                    pattern: [ VALIDATION_REGEXES.fileExtensionRegex, "Invalid file format. Only JPG, JPEG, PNG, and PDF are accepted."]
                  }}
                />
                <JRSInput
                  ref={legalEntityPaperRef}
                  type="file"
                  label="Upload your project legal entity paper:"
                  validate={{
                    required: "Legal entity paper field can't be empty",
                    pattern: [ VALIDATION_REGEXES.fileExtensionRegex, "Invalid file format. Only JPG, JPEG, PNG, and PDF are accepted."]
                  }}
                />
                <JRSInput
                  type="file"
                  label="Upload your project optional paper:"
                  validate={{
                    required: "Optional paper field can't be empty",
                    pattern: [ VALIDATION_REGEXES.fileExtensionRegex, "Invalid file format. Only JPG, JPEG, PNG, and PDF are accepted."]
                  }}
                />
                <input onClick={nextPhase} className="container__KYC__form__group__btn" type='button' value='Next' />
              </div>
              
           
              <div ref={group4} className="container__KYC__form__group hide">
              <h3 className="container__KYC__form__group__title">Project token</h3>
                <JRSInput
                ref={tokenPriceRef}
                type="number"
                placeHolder="Project token price"
                validate={{
                  required: "Project token price field can't be empty",
                  pattern : [VALIDATION_REGEXES.tokenPriceRegex, "This token price seems to be wrong."]
                }}
              />
              <JRSInput
                ref={tokenSupplyRef}
                type="number"
                placeHolder="Project token supply"
                validate={{
                  required: "Project token supply field can't be empty",
                  pattern : [VALIDATION_REGEXES.tokenSupplyRegex, "This token supply seems to be wrong."]
                }}
              />
              <JRSInput
                ref={tokenSaleCapRef}
                type="number"
                placeHolder="Project token sale cap"
                validate={{
                  required: "Project token sale cap field can't be empty",
                  pattern : [VALIDATION_REGEXES.tokenCapRegex, "This token sale cap seems to be wrong."]
                }}
              />
              <JRSInput
                ref={tokenStartDateRef}
                inputVal={formData?.startDate}
                type="date" 
                placeHolder="Project token start date YYYY/MM/DD"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                validate={{
                  required: "Token sale start date field can't be empty",
                  pattern: [VALIDATION_REGEXES.dateRegex, "This date must be in the format YYYY-MM-DD"],
                }}
              />
              <input onClick={submit} className="container__KYC__form__group__btn" type='button' value='Submit' />
              </div>
              <div ref={group5} className="container__KYC__form__group hide">
                <h3>Completed!</h3>
                <p>Thank you for your application. We will review your project and get back to you as soon as possible.</p>
              </div>
              
            </form>
      </div>
      </>
  )
}

export default Kyc