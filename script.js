// This is my 3rd API which will create the qrcode and print in the webpage.
async function qrcodeApi() { 
    try { 
        const response = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150&data=priya', 
        { method: 'GET', headers: { accept: 'application/json', }, }); 
        // Check whether the response returned with success code or not. 
        //If its not success then we should throw the error. 
        if (!response.ok) { throw new Error(`Error! status: ${response.status}`); } 
        // If the response is success we need to blob the response and create the url and 
        //then create the image tag and add scr= the created url and appendchild that tag to body element. 
        const qrblob = await response.blob(); 
        const qrurl = URL.createObjectURL(qrblob); 
        const qrimage = document.createElement('img'); 
        qrimage.src = qrurl; document.body.appendChild(qrimage); 
        return result; 
    } 
        catch (err) { 
            console.log(err); 
        } 
    } 
    
    qrcodeApi();