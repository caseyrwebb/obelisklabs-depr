const mark = "</>";

function Graphic() {
  return (
    <div
      style={{
        border: "thin solid #000",
        backgroundColor: "#fff",
        height: "80%",
        width: "80%",
      }}
    >
      <div
        style={{
          height: "20%",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          borderTop: "thin solid #000",
          height: "80%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <pre style={{ fontSize: "3em" }}>{mark}</pre>
      </div>
    </div>
  );
}

function SmallPhone() {
  return (
    <div
      style={{
        flex: 1,
        padding: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "650px",
        minWidth: "200px",
        minHeight: "300px",
        maxHeight: "350px",
      }}
    >
      <div
        style={{
          width: "4em",
          height: "0.2em",
          borderRadius: "18px",
          backgroundColor: "#000",
          position: "absolute",
          marginTop: "1em",
        }}
      ></div>
      <div
        style={{
          width: "0.25em",
          height: "0.25em",
          borderRadius: "50%",
          backgroundColor: "#000",
          position: "absolute",
          marginTop: "1em",
          marginRight: "6em",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "18px",
          height: "100%",
          width: "25%",
          padding: "2em 0.5em 2em 0.5em",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            border: "thin solid black",
          }}
        >
          <pre style={{ fontSize: "1.5em", marginLeft: "0.5em" }}>{mark}</pre>
        </div>
      </div>
    </div>
  );
}

export default SmallPhone;
