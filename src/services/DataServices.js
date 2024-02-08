async function AddEndpoint(numOne, numTwo){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/Sum/GetSum/${numOne}/${numTwo}`);
    const data = await promise.text();
    return data;
}

export { AddEndpoint }