
function homeAfretSignIn(){
    window.location.href = '/HomeAfterSignin/home.html';
}

 
// function pay(value){
//     if(value === 0){
//         document.querySelector('.debit').style.background = '#eff0f3';

//         var name = document.createElement('div');
//         var namePara = document.createElement('p');
//         namePara.innerText = 'Name on card';
//         var nameInput = document.createElement('input');
//         name.append(namePara, nameInput);

//         var card = document.createElement('div');
//         var cardPara = document.createElement('p');
//         cardPara.innerText = 'Card number';
//         cardPara.innerText = 'Card number';
//         var cardInput = document.createElement('input');
//         cardInput.setAttribute('class','cardNumber');
//         card.append(cardPara, cardInput);

//         var expiry = document.createElement('div');
//         var expiryPara = document.createElement('p');
//         expiryPara.innerText = 'Expiration date';
//         var expiryInput = document.createElement('input');
//         expiryInput.setAttribute('type','month');
//         expiryInput.setAttribute('class','expiry');
//         expiry.append(expiryPara, expiryInput);

//         var submitBtn = document.createElement('div');
//         var submitPara = document.createElement('p');
//         submitPara.innerText = 'submit';
//         submitPara.style.visibility = 'hidden';
//         var submit = document.createElement('button');
//         submit.setAttribute('type','submit');
//         submit.setAttribute('class','submitBtn');
//         submit.innerText = 'Add your card';
//         submitBtn.append(submitPara,submit);

//         document.querySelector('.container').append(name, card, expiry, submitBtn);
//         document.querySelector('.spanContent').innerText = '';
//         document.querySelector('.upi>p').innerText = '';
//     }
//     else if(value === 1){
//         document.querySelector('.upi>p').innerText = '';
//         document.querySelector('.container').innerText = '';
//         document.querySelector('.netbanking').style.background = '#fcf5ee';
//         var span = document.createElement('span');
//         span.setAttribute('class','spanContent');
//         span.innerHTML = '<i class="fas fa-exclamation-circle"></i> For faster payment and instant refund, please use UPI ';
//         document.querySelector('.netbanking').append(span);
//     }
//     else{
//         document.querySelector('.upi').style.background = '#eff0f3';
//         var text = document.createElement('p');
//         text.innerText = 'Enter your UPI ID';
//         var input = document.createElement('input');
//         document.querySelector('.upi').append(text,input);

//         document.querySelector('.container').innerText = '';
//         document.querySelector('.spanContent').innerText = '';


//     }
// }

function pay(value){
    if(value === 0){
        document.querySelector('.upiOption').style.display = 'none';
        document.querySelector('.upi').style.background = '';
        document.querySelector('.netbanking').style.background = '';
        document.querySelector('.netbankingOption').style.display = 'none';
        document.querySelector('.debitContainer').style.display = 'block';
        document.querySelector('.debit').style.background = '#eff0f3';
    }else if(value === 1){
        document.querySelector('.upiOption').style.display = 'none';
        document.querySelector('.upi').style.background = '';
        document.querySelector('.debit').style.background = '';
        document.querySelector('.netbanking').style.background = '#fcf5ee';
        document.querySelector('.debitContainer').style.display = 'none';
        document.querySelector('.netbankingOption').style.display = 'block';
    }else if(value === 2){
        document.querySelector('.debit').style.background = '';
        document.querySelector('.netbanking').style.background = '';
        document.querySelector('.debitContainer').style.display = 'none';
        document.querySelector('.netbankingOption').style.display = 'none';
        document.querySelector('.upiOption').style.display = 'block';
        document.querySelector('.upi').style.background = '#eff0f3';
    }
}



function proceed(){
    var otp = prompt('Enter Your OTP');
    while(otp !== '9637415465465'){
        if(otp === '963741'){
            window.location.href = '/tvshows/tvShows.html';
            break;
        }else if(otp = ''){
            break;
        }else{
            alert('Wrong OTP');
            var otp = prompt('Enter Your OTP');
        }
    }
}

