const apiUrl = 'http://172.31.5.32:5000/pythonapi';

async function callApiPython (image) {

    const body = image;

    response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(body)
    });

    const result = await response.json();
    const detectedText = result.texto;

    console.log('Texto: ' + detectedText);
    
    return detectedText
        ? {text: String(detectedText)}
        : { text: 'Esta imagem não possui texto.' }

}

export default callApiPython;