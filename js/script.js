
//! <-------------------------------------------Create Elements-------------------------------------------------------->

//*          <----------------------------------Using function---------------------------------->
function element(tag, classname, id, text) {
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
  }
  
  const Heading = element(
    "h1",
    "text-center mt-5 text-primary fw-bolder ",
    "title",
    ""
  );
  const Description = element(
    "p",
    "text-center text-primary fw-bolder my-5 p-3",
    "description",
    ""
  );
  const Content = element(
    "div",
    "content w-100 d-flex justify-content-center align-items-center",
    "",
    ""
  );
  const Calculator = element("div", "calculator m-auto px-3 py-4", "", "");
  const Display = element("input", "display w-100", "result", "");
  const NumRow = element("div", "row g-2 p-2", "rows", "");
  const C = element("button", "btn col-3 text-danger ", "clear", "C");
  const Backspace = element("button", "btn col-3 p-3", "backspace", "&larr;");
  const Point = element("button", "btn col-3 p-3", "point", ".");
  const Multi = element("button", "btn col-3 p-3", "multi", "X");
  const Seven = element("button", "btn col-3 p-3", "7", "7");
  const Eight = element("button", "btn col-3 p-3", "8", "8");
  const Nine = element("button", "btn col-3 p-3", "9", "9");
  const Slash = element("button", "btn col-3 p-3", "divide", "/");
  const Four = element("button", "btn col-3 p-3", "4", "4");
  const Five = element("button", "btn col-3 p-3", "5", "5");
  const Six = element("button", "btn col-3 p-3", "6", "6");
  const Sub = element("button", "btn col-3 p-3", "subtract", "-");
  const One = element("button", "btn col-3 p-3", "1", "1");
  const Two = element("button", "btn col-3 p-3", "2", "2");
  const Three = element("button", "btn col-3 p-3", "3", "3");
  const Add = element("button", "btn col-3 p-3", "add", "+");
  const Zero = element("button", "btn col-3 p-3", "zero", "0");
  const DoubleZero = element("button", "btn col-3 p-3", "double", "00");
  const TripleZero = element("button", "btn col-3 p-3", "triple", "000");
  const Mod = element("button", "btn col-3 p-3", "mod", "| % |");
  const Equal = element(
    "button",
    "btn btn-info fs-3 fw-bold text-danger-emphasis mt-2 p-2 d-flex justify-content-center align-items-center ",
    "equal",
    "="
  );
  
  //*          <----------------------------------Set Attributes and content---------------------------------->
  
  Display.type = "text";
  Display.placeholder = "0";
  Display.setAttribute("readonly", "");
  Heading.innerHTML = "Calculator";
  Description.innerHTML =
    "This Calculator Task was Created with Javascript DOM Manipulation";
  
  //! <-------------------------------------------Functions-------------------------------------------------------->
  
  //*          <----------------------------------Used Keyboard Events---------------------------------->
  
  const keyMap = {
    0: Zero,
    1: One,
    2: Two,
    3: Three,
    4: Four,
    5: Five,
    6: Six,
    7: Seven,
    8: Eight,
    9: Nine,
    // ".": Point,
    // "+": Add,
    // "-": Sub,
    // "*": Multi,
    // "/": Slash,
    // "%": Mod,
    "=": Equal,
    Backspace: Backspace,
    Delete: C,
  };
  
  document.addEventListener("keyup", (e) => {
    if (keyMap[e.key]) {
      keyMap[e.key].click();
    } else if (!/^[0-9]$/.test(e.key)) {
      alert("Only numbers are allowed");
    }
  });
  
  //*          <----------------------------------Used click Events and logics---------------------------------->
  
  let equalRes = false;
  
  C.addEventListener("click", () => {
    Display.value = "";
  });
  
  Backspace.addEventListener("click", () => {
    Display.value = Display.value.slice(0, -1);
  });
  
  Point.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = ".");
    } else {
      if (
        Display.value.charAt(Display.value.length - 1) !== "." &&
        Display.value.charAt(Display.value.length - 1) !== "/" &&
        Display.value.charAt(Display.value.length - 1) !== "*" &&
        Display.value.charAt(Display.value.length - 1) !== "-" &&
        Display.value.charAt(Display.value.length - 1) !== "+" &&
        Display.value.charAt(Display.value.length - 1) !== "%" &&
        Display.value.charAt(Display.value.length - 1) !== ""
      ) {
        Display.value += ".";
      }
    }
  });
  
  Multi.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "*");
    } else {
      if (
        Display.value.charAt(Display.value.length - 1) !== "." &&
        Display.value.charAt(Display.value.length - 1) !== "/" &&
        Display.value.charAt(Display.value.length - 1) !== "*" &&
        Display.value.charAt(Display.value.length - 1) !== "-" &&
        Display.value.charAt(Display.value.length - 1) !== "+" &&
        Display.value.charAt(Display.value.length - 1) !== "%" &&
        Display.value.charAt(Display.value.length - 1) !== ""
      ) {
        Display.value += "*";
      }
    }
  });
  
  Slash.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "/");
    } else {
      if (
        Display.value.charAt(Display.value.length - 1) !== "." &&
        Display.value.charAt(Display.value.length - 1) !== "/" &&
        Display.value.charAt(Display.value.length - 1) !== "*" &&
        Display.value.charAt(Display.value.length - 1) !== "-" &&
        Display.value.charAt(Display.value.length - 1) !== "+" &&
        Display.value.charAt(Display.value.length - 1) !== "%" &&
        Display.value.charAt(Display.value.length - 1) !== ""
      ) {
        Display.value += "/";
      }
    }
  });
  
  Sub.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "-");
    } else {
      if (
        Display.value.charAt(Display.value.length - 1) !== "." &&
        Display.value.charAt(Display.value.length - 1) !== "/" &&
        Display.value.charAt(Display.value.length - 1) !== "*" &&
        Display.value.charAt(Display.value.length - 1) !== "-" &&
        Display.value.charAt(Display.value.length - 1) !== "+" &&
        Display.value.charAt(Display.value.length - 1) !== "%" &&
        Display.value.charAt(Display.value.length - 1) !== ""
      ) {
        Display.value += "-";
      }
    }
  });
  
  Add.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "+");
    } else {
      if (
        Display.value.charAt(Display.value.length - 1) !== "." &&
        Display.value.charAt(Display.value.length - 1) !== "/" &&
        Display.value.charAt(Display.value.length - 1) !== "*" &&
        Display.value.charAt(Display.value.length - 1) !== "-" &&
        Display.value.charAt(Display.value.length - 1) !== "+" &&
        Display.value.charAt(Display.value.length - 1) !== "%" &&
        Display.value.charAt(Display.value.length - 1) !== ""
      ) {
        Display.value += "+";
      }
    }
  });
  
  Mod.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "%");
    } else {
      if (
        Display.value.charAt(Display.value.length - 1) !== "." &&
        Display.value.charAt(Display.value.length - 1) !== "/" &&
        Display.value.charAt(Display.value.length - 1) !== "*" &&
        Display.value.charAt(Display.value.length - 1) !== "-" &&
        Display.value.charAt(Display.value.length - 1) !== "+" &&
        Display.value.charAt(Display.value.length - 1) !== "%" &&
        Display.value.charAt(Display.value.length - 1) !== ""
      ) {
        Display.value += "%";
      }
    }
  });
  
  Equal.addEventListener("click", () => {
    try {
      Display.value = eval(Display.value);
    } catch (error) {
      Display.value = "Error";
    }
  
    equalRes = true;
  });
  
  Seven.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "7");
    } else {
      return (Display.value += "7");
    }
  });
  
  Eight.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "8");
    } else {
      return (Display.value += "8");
    }
  });
  
  Nine.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "9");
    } else {
      return (Display.value += "9");
    }
  });
  
  Four.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "4");
    } else {
      return (Display.value += "4");
    }
  });
  
  Five.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "5");
    } else {
      return (Display.value += "5");
    }
  });
  
  Six.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "6");
    } else {
      return (Display.value += "6");
    }
  });
  
  One.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "1");
    } else {
      return (Display.value += "1");
    }
  });
  
  Two.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "2");
    } else {
      return (Display.value += "2");
    }
  });
  
  Three.addEventListener("click", () => {
    if (Display.value.charAt(0) === "0" || equalRes) {
      equalRes = false;
      return (Display.value = "3");
    } else {
      return (Display.value += "3");
    }
  });
  
  Zero.addEventListener("click", () => {
    if (Display.value.charAt(Display.value.length - 1) !== "") {
      Display.value += "0";
    } else {
      Display.value = "";
    }
  });
  
  DoubleZero.addEventListener("click", () => {
    if (Display.value.charAt(Display.value.length - 1) !== "") {
      Display.value += "00";
    } else {
      Display.value = "";
    }
  });
  
  TripleZero.addEventListener("click", () => {
    if (Display.value.charAt(Display.value.length - 1) !== "") {
      Display.value += "000";
    } else {
      Display.value = "";
    }
  });
  
  //! <-------------------------------------------Append section-------------------------------------------------------->
  
  NumRow.append(
    C,
    Backspace,
    Point,
    Multi,
    Seven,
    Eight,
    Nine,
    Slash,
    Four,
    Five,
    Six,
    Sub,
    One,
    Two,
    Three,
    Add,
    Zero,
    DoubleZero,
    TripleZero,
    Mod,
    Equal
  );
  
  Calculator.append(Display, NumRow);
  Content.append(Calculator);
  document.body.append(Heading, Description, Content);
  