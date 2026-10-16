const fs = require('fs');
const FormData = require('form-data');

async function uploadFile() {
  const fileStream = fs.createReadStream('screenshot.png');
  const formData = new FormData();
  formData.append('reqtype', 'fileupload');
  formData.append('fileToUpload', fileStream);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch('https://catbox.moe/user/api.php', requestOptions);
    const text = await response.text();
    console.log("Upload URL:", text);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

uploadFile();
