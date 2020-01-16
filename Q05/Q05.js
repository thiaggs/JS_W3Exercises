
function firstJanSun(){

    for(let i = 2014; i < 2051; i++){
        let a = new Date(`1-1-${i}`);

        if(a.getDay() === 0){
            alert(a.getFullYear());
            
        } 


    }

}