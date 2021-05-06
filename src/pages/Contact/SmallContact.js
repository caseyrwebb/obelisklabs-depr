function SmallContact() {
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
          maxWidth: "85%",
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
          style={{ display: "flex", flexDirection: "column", width: "70%" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={{ fontSize: "2em", marginTop: "0.5em", width: "100%" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            style={{ fontSize: "2em", marginTop: "0.5em", width: "100%" }}
          />

          <textarea
            id="message"
            name="message"
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

export default SmallContact;
