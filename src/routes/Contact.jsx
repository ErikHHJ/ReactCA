import { useState, useEffect } from "react";

export function Contact() {
  const [inputFields, setInputFields] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    if (!isEmail(inputFields.email)) {
      errors.email = "Must be a valid email format.";
    }
    if (inputValues.subject.length < 3) {
      errors.subject = "Subject must be at least 3 characters.";
    }
    if (inputValues.fullName.length < 3) {
      errors.fullName = "Full name must be at least 3 characters.";
    }
    if (inputValues.body.length < 3) {
      errors.body = "Body must be at least 3 characters";
    }
    return errors;
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <div className="container">
      <form className="contactform" onSubmit={handleSubmit}>
        <h1>Contact Us!</h1>
        {Object.keys(errors).length === 0 && submitting ? (
          <span className="formsuccess">Successfully submitted ✓</span>
        ) : null}
        <div>
          <label className="label" htmlFor="fullName">
            Full Name
          </label>
          <input
            required
            className="contactinput"
            type="text"
            name="fullName"
            value={inputFields.fullName}
            onChange={handleChange}
            style={{ border: errors.fullName ? "1px solid red" : null }}
          />
          {errors.fullName ? (
            <p className="contacterror">{errors.fullName}</p>
          ) : null}
          <label className="label" htmlFor="subject">
            Subject
          </label>
          <input
            required
            className="contactinput"
            type="text"
            name="subject"
            value={inputFields.subject}
            onChange={handleChange}
            style={{ border: errors.subject ? "1px solid red" : null }}
          />
          {errors.subject ? (
            <p className="contacterror">{errors.subject}</p>
          ) : null}
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            required
            className="contactinput"
            type="text"
            name="email"
            value={inputFields.email}
            onChange={handleChange}
            style={{ border: errors.email ? "1px solid red" : null }}
          />
          {errors.email ? <p className="contacterror">{errors.email}</p> : null}
          <label className="label" htmlFor="body">
            Body
          </label>
          <textarea
            required
            className="contactinput"
            type="text"
            name="body"
            value={inputFields.body}
            onChange={handleChange}
            style={{ border: errors.body ? "1px solid red" : null }}
          />
          {errors.body ? <p className="contacterror">{errors.body}</p> : null}
        </div>
        <button className="submitbutton" type="submit">
          Submit Information
        </button>
      </form>
    </div>
  );
}
