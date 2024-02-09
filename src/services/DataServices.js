export async function SayHelloEndpoint(userName){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/Hello/Hello/${userName}`);
    const data = await promise.text();
    return data;
}

export async function AddEndpoint(numOne, numTwo){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/Sum/GetSum/${numOne}/${numTwo}`);
    const data = await promise.text();
    return data;
}

export async function QuestionEndpoint(name, time){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/Question/GetAnswers/${name}/${time}`);
    const data = await promise.text();
    return data;
}

export async function CompareEndpoint(numOne, numTwo){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/Compare/CompareNums/${numOne}/${numTwo}`);
    const data = await promise.text();
    return data;
}

export async function MadLibEndpoint(noun1, holiday1, pronoun1, animal1, exclamation1, color1, noun2, verb1_ing, bluntObject1, hours1){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/MadLib/MadLib/${noun1}/${holiday1}/${pronoun1}/${animal1}/${exclamation1}/${color1}/${noun2}/${verb1_ing}/${bluntObject1}/${hours1}`);
    const data = await promise.text();
    return data;
}

export async function OddOrEvenEndpoint(numOne){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/OddOrEven/OddOrEven/${numOne}`);
    const data = await promise.text();
    return data;
}

export async function ReverseStrEndpoint(userInput){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/ReverseItAlpha/ReverseIt/Entersequenceoflettersandornumbers${userInput}`);
    const data = await promise.text();
    return data;
}

export async function ReverseNumEndpoint(userNum){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/ReverseItNum/ReverseItNum/Enteranumberonly${userNum}`);
    const data = await promise.text();
    return data;
}

export async function MagicEndpoint(){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/MagicBall/Generate8BallResponseToQuestion/`);
    const data = await promise.text();
    return data;
}

export async function RestaurantEndpoint(category){
    const promise = await fetch(`https://allforoneproject.azurewebsites.net/Restaurant/ChoosePizzaSushiOrBurgers/${category}`);
    const data = await promise.text();
    return data;
}