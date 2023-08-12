const blob = document.querySelector("#blob");

document.onpointermove = (e) => {
  const { clientX, clientY } = e;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 2500, fill: "forwards" }
  );
};
