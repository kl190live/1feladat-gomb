
document.addEventListener('DOMContentLoaded',()=>{
  const button=document.createElement('button');
  document.getElementById('app')!.appendChild(button);
  button.textContent='gomb';
    
  document.getElementById('app')!.addEventListener('click',katt)

  function katt()
  {
    const button1=document.createElement('button');
    document.getElementById('app')!.appendChild(button1);
    button1.textContent='gomb'
    
  }
  
})