import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from "react";
import "./JRSInput.scss";

interface JRSInputProps {
  type?: string;
  label?: string;
  className?: string;
  inputClassName?: string;
  errorClassName?: string;
  labelClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  validationDelay?: number;
  validate?: {
    required?: string;
    pattern?: [RegExp, string];
    match?: [(value: string) => boolean, string];
  };
  wasNotTriedToSubmit?: boolean;
  passwordHelper?: [RegExp, string][];
  placeHolder?: string;
  inputVal?: string;
}

interface JRSInputRef {
  inputValue: string;
  error: string;
  focus: () => void;
  focusNotValidated: () => boolean;
  wasTouched: () => void;
  clear: () => void;
}

const JRSInput = forwardRef<JRSInputRef, JRSInputProps>((props, ref) => {
  
  const {
    type,
    label,
    className,
    inputClassName,
    errorClassName,
    labelClassName,
    onChange,
    onBlur,
    onFocus,
    validationDelay = 500,
    validate,
    wasNotTriedToSubmit,
    passwordHelper,
    placeHolder,
    inputVal,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputTimer, setInputTimer] = useState<NodeJS.Timeout>();
  const [error, setError] = useState<string>("NotValidated");
  const [isFocused, setIsFocused] = useState<boolean>();

  const focus = () => {
    inputRef.current?.focus();
  };

  const focusNotValidated = () => {
    if (!error) return false;
    inputRef.current?.focus();
    return true;
  };

  const handleValidation = (value: string) => {
    if (!validate) return;
    if (validate.required && value.trim() === "") {
      setError(validate.required);
      return;
    }

    if (validate.pattern && value.length > 0 && !validate.pattern[0].test(value)) {
      setError(validate.pattern[1]);
      return;
    }

    if (validate.match && value.length > 0 && !validate.match[0](value)) {
      setError(validate.match[1]);
      return;
    }

    setError("");
  };

  const wasTouched = () => {
    inputValue ? handleValidation(inputValue) : handleValidation("");
  };

  const clear = () => {
    setInputValue("");
    setError("NotValidated");
  };

  useImperativeHandle(ref, () => {
    return {
      inputValue,
      error,
      focus,
      focusNotValidated,
      wasTouched,
      clear,
    };
  });

  const onBlurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { value },
    } = e;
    onBlur && onBlur(e);
    setInputValue(value);
    handleValidation(value);
    setIsFocused(false);
  };

  const onFocusHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
    onFocus && onFocus(e);
    setIsFocused(true);
  };

  const inputIsInvalid = error && error !== "NotValidated" && !wasNotTriedToSubmit;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    clearInterval(inputTimer);
    onChange && onChange(e);
    setInputValue(value);
    inputIsInvalid
      ? handleValidation(value)
      : setInputTimer(
          setTimeout(() => {
            handleValidation(value);
          }, validationDelay)
        );
  };
  
    useEffect(() => {
      if(inputVal){
      setInputValue(inputVal)
      }
    },[inputVal])
  
    return (
      <div className={["jrs-input", className, inputIsInvalid && "invalid"].join(" ")}>
        {label && <label className={labelClassName}>{label}</label>}
        <input
          ref={inputRef}
          className={inputClassName}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          type={type || "text"}
          value={inputValue}
          placeholder={placeHolder}
          {...rest}
        />
        {inputIsInvalid && <p className={["error", errorClassName].join(" ")}>{error}</p>}
        {passwordHelper && isFocused && (
          <div className={"tooltip"}>
            <ul>
              {passwordHelper.map((item, index) => {
                const error = !item[0].test(inputValue);
                return (
                  <li key={index} className={["element", error && "not-checked"].join(" ")}>
                    {error ? <p>&#10060;</p> : <p>&#x2705;</p>} <p>{item[1]}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  });
  
  export default JRSInput;
  