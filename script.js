// Menu dos beneficios colapsaveis

var col = document.getElementsByClassName('beneficio')
for (let i = 0; i < col.length; i++){
    col[i].addEventListener('click', colapsar) 
    
    function colapsar(){
        if (col[i].nextElementSibling.style.display == 'none'){
            col[i].nextElementSibling.style.display = 'block'
        } else {
            col[i].nextElementSibling.style.display = 'none'
        }
    }
}
