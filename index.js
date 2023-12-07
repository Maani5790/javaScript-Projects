const button = document.getElementById("get-location-button");

const getLocation = (position) => {
  console.log(position)
}


const failedToGet = () => {
  console.log("there was an error")
}

button.addEventListener('click', async () => {
  const result = navigator.geolocation.getCurrentPosition(getLocation, failedToGet);
})