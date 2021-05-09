import { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailData = {
      name: name,
      email: email,
      message: message,
    };
    axios
      .post(
        "https://us-central1-webportfolio-da791.cloudfunctions.net/api/email",
        emailData
      )
      .then((res) => {
        console.log(res.data);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        setErrors(err.response.data);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        width: "100",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "50%",
          marginTop: "3em",
        }}
      >
        <h1
          style={{
            color: "#000",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "900",
            fontSize: "4em",
            lineHeight: "0px",
          }}
        >
          Contact
        </h1>
        <p
          style={{
            marginTop: "0",
            textAlign: "center",
            color: "#000",
            fontFamily: "Ubuntu Mono, monospace",
            fontSize: "1.5em",
            fontWeight: "400",
          }}
        >
          Interested in starting a project? Fill out this form or reach me at
          the contact info listed below.
        </p>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: "70%" }}
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your Name"
            style={{ fontSize: "2em", marginTop: "0.5em", width: "100%" }}
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your Email"
            style={{ fontSize: "2em", marginTop: "0.5em", width: "100%" }}
          />

          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your Message"
            style={{
              fontSize: "2em",
              marginTop: "0.5em",
              width: "100.5%",
              height: "6em",
            }}
          ></textarea>

          <input
            type="submit"
            value="Send"
            style={{
              border: "thin solid black",
              marginTop: "1em",
              marginBottom: "3em",
              width: "102%",
              backgroundColor: "#fff",
              fontSize: "2em",
            }}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
