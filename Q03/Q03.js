    
function getADate(){
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
    alert(`${day}/${month}/${year}`);
};