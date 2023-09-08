const day = document.getElementById('day');
const time = document.getElementById('time');

const currentDate = new Date();
const today = currentDate.toLocaleString('en-GB', { weekday: 'long' });

day.textContent = today;

const updateTime = () => {
  const utcTime = currentDate.getUTCMilliseconds();
  time.textContent = utcTime;
};
const setUpdatedtime = setInterval(updateTime, 1000);
