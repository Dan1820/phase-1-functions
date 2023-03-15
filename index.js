const takeCareOfDog= (dogName,breed)=>{
  
    console.log('wake up '+dogName  + 'the ' +breed);
    console.log('wash ' +dogName + 'the ' +breed );

}
takeCareOfDog('kali' , 'german shepherd');


const weatherToday = 'rainny';

const exerciseDog= (dogName, breed)=>{
    if(weatherToday==='rainny'){
        return `${dogName} did not exercise today due to rains`;

    }else{
        console.log('wake up '+dogName  + ' the ' +breed);
    console.log('wash ' +dogName + ' the ' +breed );

    return `${dogName} is happy and tired`;


    }
    
}
const result= exerciseDog('kali' , 'german shepherd old model');
console.log(result);
