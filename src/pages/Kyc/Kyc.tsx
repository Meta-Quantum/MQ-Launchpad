import React, { useEffect, useRef, useState } from 'react';

import "./Kyc.scss"
import Navbar from "../../components/Navbar/Navbar"

const Kyc = () => {

    const [formData, setFormData] = useState(null); 
    //const formData: { [key: string]: string } = {};
      
    const group:any = useRef()
    const group2:any = useRef()
    const group3:any = useRef()
    const item1:any = useRef()
    const item2:any = useRef()
    const item3:any = useRef()

    const saveFormData = (form: { querySelectorAll: (arg0: string) => any; }) => {

        const inputs = form.querySelectorAll("input");
        inputs.forEach((input: { name: string; value: string; }) => {
            if(input.name){
                formData[input.name] = input.value;
            }
        });
        localStorage.setItem("formData", JSON.stringify(formData));
    }

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem("formData"));
        if (storedFormData) {
          setFormData(storedFormData);
        }
      }, []);

    const handleClickPhase1 = () => {

        group.current.classList.add('hide')
        group2.current.classList.remove('hide')
        item1.current.classList.remove('active')
        item2.current.classList.add('active')
        
        saveFormData(group.current)
       
      };
      
    const handleClickPhase2 = (event: { preventDefault: () => void; }) => {

        group2.current.classList.add('hide')
        group3.current.classList.remove('hide')
        item2.current.classList.remove('active')
        item3.current.classList.add('active')

        saveFormData(group2.current)
        
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
                < input className="container__KYC__form__group__input" name = "name" type="text" placeholder="Your name" />
                < input className="container__KYC__form__group__input" name = "email" type='email' placeholder='Your email' />
                < input className="container__KYC__form__group__input" name = "telegram" type="text" placeholder='Your telegram handle' />
                < input className="container__KYC__form__group__input" type="90password" placeholder='Password' />
                <span>6 characters minimum</span>
                < input className="container__KYC__form__group__input" type="password" placeholder='Confirm password' />
                <input onClick={handleClickPhase1} className="container__KYC__form__group__btn" type='button' value='Next' />
               </div>

                <div ref={group2} className="container__KYC__form__group hide">
                <h3 className="container__KYC__form__group__title">Project Details</h3>
                <input className="container__KYC__form__group__input" name = "projectName" type="text" placeholder='Project name' />
                <input className="container__KYC__form__group__input" name = "projectWebsite" type="text" placeholder='Project website' />
                <input className="container__KYC__form__group__input" name = "projectDescription" type="text" placeholder='Project description' />
                <label>Upload your project's white paper:</label>
                <input className="container__KYC__form__group__input" type='file' />
                <input className="container__KYC__form__group__input" name = "tokenPrice" type='number' placeholder='Project token price' />
                <input className="container__KYC__form__group__input" name = "tokenSupply" type='number' placeholder='Project token supply' />
                <input className="container__KYC__form__group__input" name = "tokenCap" type='number' placeholder='Project token sale cap' />
                <input className="container__KYC__form__group__input" name = "startDate" type='date' placeholder='Project token sale start date' />
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