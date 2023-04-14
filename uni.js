let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    switch(e.target.innerHTML){
      case '=':
       try{string = eval(string);
      document.querySelector('input').value = string;
        }catch{
          string = "  Error"
         document.querySelector('input').value = string;
        }
     break;
     case 'DEL':
        if(string!="")
        {
           string = string.slice(0,-1)
         document.querySelector('input').value = string;
        }
        else
        {
          string = " give input"
         document.querySelector('input').value = string;
        }
          
        break;
    case 'C':
        if(string=="")
        {
          string = " give input"
         document.querySelector('input').value = string;
        }
          
      else{
      string = ""
      document.querySelector('input').value = string;
      }
      break;
    
    default:
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
      
  })
})