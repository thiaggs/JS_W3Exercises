const container = document.querySelector('.container');

container.addEventListener('mousedown', function(e){
    const btn = e.target;
    if(btn.className === 'list-group-item list-group-item-action bg-secondary text-white'){
        btn.className += ' active';
        console.log(btn);
    }

    
   document.addEventListener('mouseup', function(){
       btn.className = 'list-group-item list-group-item-action bg-secondary text-white';
   })

    e.preventDefault();

});


