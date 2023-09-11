const createNewAccount=document.querySelector('.container-create-new-account');
const containerLogin1=document.querySelector('.container-login1');
const hiddenCreateAccount=document.querySelector('.container-create-new-account .fa-times');
const containerPassword=document.querySelector('.container-password');
const containerPasswordInput=document.querySelector('.container-password input[type="password"]');
const passwordEye=document.querySelector('.container-password #showHiddenEye');
const hiddenPasswordEye=document.querySelector('.container-password #showHiddenEye >i');
 const newAccount=document.querySelector('.new-account');
passwordEye.addEventListener('click',(e)=>{
     hiddenPasswordEye.classList.toggle('hiddenPasswordEye')
     containerPasswordInput.classList.toggle('checked')

     if(containerPasswordInput.classList.contains('checked')){
        containerPasswordInput.type='text';
    }else{
         containerPasswordInput.type='password';
         
     }
})

// console.log(createNewAccount)
newAccount.addEventListener('click',(e)=>{
    createNewAccount.classList.toggle('showCreateNewAccount')
    containerLogin1.classList.toggle('showLogin')
})

hiddenCreateAccount.addEventListener("click",function(e){
    createNewAccount.classList.toggle('hiddenCreateNewAccount')
     
})