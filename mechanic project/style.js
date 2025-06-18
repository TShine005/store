//   function togglePassword() {
//     const passwordInput = document.getElementById("password");
//     const button = event.target;
//     if (passwordInput.type === "password") {
//       passwordInput.type = "text";
//       button.textContent = "Hide";
//     } else {
//       passwordInput.type = "password";
//       button.textContent = "Show";
//     }
//   }

const togglePassword = document.getElementById("togglePassword");
    const password = document.getElementById("password");

    togglePassword.addEventListener("click", function () {
      const type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      
      // Toggle eye / eye-slash icon
      this.classList.toggle("fa-eye");
      this.classList.toggle("fa-eye-slash");
    });

const validUsername = "tshine";
    const validPassword = "1234";

    function login() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const message = document.getElementById("message");

      if (username === validUsername && password === validPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";
      } else {
        message.textContent = "Invalid credentials.";
        message.style.color = "red";
      }
    }

 function updateClock() {
      const now = new Date();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const amPm = hours >= 24 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // Convert hour '0' to '12'
      hours = String(hours).padStart(2, '0');

      const currentTime = `${hours}:${minutes}:${seconds} ${amPm}`;
      document.getElementById('clock').textContent = currentTime;
    }

    updateClock(); // Initial call
    setInterval(updateClock, 1000);


    // CALENDAR
   // function UpdateCalender(){
       // const now = new Day();

        //FORMAT DAY AS DD-MM-YYYY
    //     const day = String(now.getDay());
    //     const month = String(now.getMonth());
    //     const year = String(now.getYear());

    //     const currentCalendar = `${day}:${month}:${year}`;
    //     document.getElementById('calender').textContent = currentCalendar;
    // }