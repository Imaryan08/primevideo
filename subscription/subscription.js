
function homeAfterSignIn(){
    window.location.href = '/HomeAfterSignin/home.html';
}

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

document.querySelector('#promoCode').addEventListener('click',function(){
    document.querySelector('.promoInput').style.display = 'block';
    document.querySelector('.caretDown').setAttribute('class','fas fa-angle-up caretDown');
});

document.querySelector('#promoCode').addEventListener('dblclick',function(){
    document.querySelector('.promoInput').style.display = 'none';
    document.querySelector('.caretDown').setAttribute('class','fas fa-angle-down caretDown');
});

// Enabling Continue button after clicking on upi verify
document.querySelector('#verify').addEventListener('click',function(){
    var upiID = document.querySelector('#upiID').value;
    if(upiID === '9643579827@ybl' || upiID === 'imaryan08@ybl' || upiID === 'rampukar@oksbi' || upiID === '8826485127@axis'){
        alert(`${upiID} is Verified`);
        var continueBtn = document.querySelector('.continueBtn');
        continueBtn.style.opacity = '1';
        continueBtn.style.color = '#fff';
        continueBtn.removeAttribute('disabled');
    }else{
        alert(`${upiID} is Invalid`);
    }
});

// Enabling Continue button after adding  debit/credit card
document.querySelector('#addDebitCard').addEventListener('click',function(){
    var userName = JSON.parse(localStorage.getItem('userName')) || '';
    var cardName = document.querySelector('#cardName').value;
    var cardNumber = document.querySelector('#cardNumber').value;
    var expiryDate = document.querySelector('#expiryDate').value;

    // console.log(cardName,cardNumber,expiryDate)
    if(cardNumber === '964357982788' && cardName === 'Rampukar' && expiryDate === '2022-02'){
        alert(`${userName} your card ${cardNumber} is verified`);
        var continueBtn = document.querySelector('.continueBtn');
        continueBtn.style.opacity = '1';
        continueBtn.style.color = '#fff';
        continueBtn.removeAttribute('disabled');
    }else{
        alert(`${userName} your card ${cardNumber} is Invalid`);
    }
});

// promocode check
document.querySelector('#promoCheck').addEventListener('click',function(){
    var promoCodeInput = document.querySelector('#promoCodeInput').value;
    if(promoCodeInput){
        if(promoCodeInput === 'masai10'){
            alert(`You'll get 10 Days extra Subscription. Complete Your Payment!!!`);
        }else{
            alert('Promocode is Invalid');
        }
    }else{
        alert('Enter Promocode');
    }
});

//Continue button for OTP
function proceed(){
    var userName = JSON.parse(localStorage.getItem('userName')) || '';
    var otp = prompt('Enter Your OTP');
    while(otp !== '9637415465465'){
        if(otp === '963741'){
            alert(`Paymemnt is Successful!! We have received your payment ${userName}, Thank you and Enjoy watching amazon prime `);
            window.location.href = '/HomeAfterSubscription/homepagemain.html';
            break;
        }else if(otp == 'null' || otp == '' || otp == null){
            break;
        }else{
            alert('Wrong OTP');
            var otp = prompt('Enter Your OTP');
        }
    }
}

