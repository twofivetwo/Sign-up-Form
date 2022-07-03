function checkPassword() {
  if (
    document.querySelector("#passwordConfirm").value !=
    document.querySelector("#password").value
  ) {
    document.querySelector("#passwordConfirm").style.border =
      "2px solid rgba(255, 57, 57, 0.8)";
  } else if (
    document.querySelector("#passwordConfirm").value ===
    document.querySelector("#password").value
  ) {
    document.querySelector("#passwordConfirm").style.backgroundColor =
      "rgba(0,0,0,0)";
    document.querySelector("#passwordConfirm").style.border =
      "1px solid rgba(100, 100, 100, 0.726)";
  }
}
