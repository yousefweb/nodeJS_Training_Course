const express = require('express');
const os = require('os');
const app = express();
const port = 3001; 
const path = require('path');

app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.get('/info', (req, res) => {

  const deviceInfo = {
    deviceName: os.hostname(),
    os: `${os.type()} ${os.release()}`,
    cpu: os.cpus()[0].model,
    memory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
  };
  
  console.log('Device Information:');
  console.log(`Device Name: ${deviceInfo.deviceName}`);
  console.log(`Operating System: ${deviceInfo.os}`);
  console.log(`CPU: ${deviceInfo.cpu}`);
  console.log(`Memory: ${deviceInfo.memory}`);


  res.render('info', { deviceInfo });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
