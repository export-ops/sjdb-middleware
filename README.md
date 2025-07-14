
# LGU QR Code Attendance Middleware

## How It Works
- Only requests from authorized IP addresses can proceed
- Employees must enter the correct Event Code
- Upon success, the page redirects to their pre-filled Google Form

## Files
- `index.html` – Main middleware logic
- `config.js` – Update allowed IPs and event code here
- `employees.js` – Employee lookup for redirect
