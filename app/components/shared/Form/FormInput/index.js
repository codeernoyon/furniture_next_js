import { useFormikContext } from "formik";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function FormInput({
  name,
  className,
  tooltip = false,
  hoverBoxContent,
  type = "text",
  editProfile = false,
  ...otherProps
}) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const [inputType, setInputType] = useState(type);

  return (
    <div className={`${!editProfile ? "mb-4" : "mb-6"}`}>
      <div className="inputBox relative flex items-center border-[1px] rounded-md border-main-clr">
        <input
          name={name}
          onBlur={() => setFieldTouched(name)}
          onChange={handleChange(name)}
          value={values[name]}
          type={inputType}
          {...otherProps}
          className={`input outline-none bg-transparent py-3 px-5 rounded w-full text-main-clr ${className}`}
        />
        {type === "password" && (
          <>
            {inputType == "password" ? (
              <AiFillEye
                onClick={() => setInputType("text")}
                className={`absolute z-20 cursor-pointer right-0 mr-4 text-main-clr`}
                size={23}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setInputType("password")}
                className={`absolute z-20 cursor-pointer right-0 mr-4 text-main-clr`}
                size={23}
              />
            )}
          </>
        )}
      </div>
      {touched[name] && (
        <span className="text-red-400 text-sm">{errors[name]}</span>
      )}
    </div>
  );
}

export default FormInput;
