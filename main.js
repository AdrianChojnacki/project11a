const clock = () => {
  const time = new Date();
  // console.log(time.toLocaleString());
  // console.log(time.toLocaleDateString());
  // console.log(time.toLocaleTimeString());
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  //   document.querySelector(`.clock span`).textContent = `${time.toLocaleTimeString()}`;
  document.querySelector(`.clock span`).textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 1000);
