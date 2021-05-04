function ComputerImage() {
  return (
    <div
      style={{
        flex: 1,
        padding: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "18px",
          height: "80%",
          width: "70%",
        }}
      >
        <div
          style={{
            height: "80%",
            width: "100%",
            border: "thin solid black",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: 1,
              margin: "1em 1em 0.5em 1em",
              backgroundColor: "#000",
            }}
          >
            <pre style={{ color: "white", marginLeft: "1em" }}>
              Hello, World!
            </pre>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "20%",
          width: "25%",
          backgroundColor: "white",
          borderTop: "thin solid #000",
          clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
        }}
      ></div>
    </div>
  );
}

export default ComputerImage;
