function clearTextbox() {
    const textArea = document.getElementById("inputarea");
    textArea.value = "";
  }
  function run() {
    let textarea = document.getElementById("inputarea").value;
    let url = 'https://api.openai.com/v1/chat/completions';
    let data = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "user",
            "content": textarea
        }
    ],
    "temperature": 0.7
};

async function getData(url) {
await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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'
  },
  body: JSON.stringify(data)
})
.then(response =>{ 
    response.json()})
.then(response => {
    return JSON.stringify(response)})
  .catch(error => {
    console.error('Error:', error);
  });
};

let setOutput = document.getElementById("outputtext");
setOutput.value = getData(url);

  }
