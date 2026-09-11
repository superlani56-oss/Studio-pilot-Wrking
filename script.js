const downloadButtons =
  document.querySelectorAll(
    'a[href="downloads/StudioPilot Setup.exe"]'
  );

downloadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(
      "StudioPilot download started."
    );
  });
});