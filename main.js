
// Báo Lỗi nhập sai
// function showError(input) {
//    let parent = input.parentElement;
//    let small = parent.querySelector('small');
//    parent.classList.add('error');
//    small.innerText = 'loi';
// }

// // Nhập đúng
// function showSuccess(input) {
//     let parent = input.parentElement;
//     let small = parent.querySelector('small');
//     parent.classList.remove('error');
//     small.innerText = '';
//  }
// Lưu thông tin đăng ký
function SignUp(e) {
    event.preventDefault();
    var username = document.querySelector('#username').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var rePassword = document.querySelector('#re-password').value;
    var form = document.querySelector('form').value;
    var user = {
        username: username,
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
}
// Log In
function LogIn(e) {
    event.preventDefault();
    var username = document.querySelector('#username').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var form = document.querySelector('form').value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(!user){
      alert("Vui lòng nhập thông tin");
    }else if(username == data.username && email == data.email && password == data.password){
      alert("Đăng nhập thành công");
      window.location.href = "index.html";
    }else{
      alert("Đăng nhập thất bại");
      window.location.href = "login.html";
    }
    
  }

// function checkInVaLid(listInput) {
//     let isInVaLid = false;
//     listInput.forEach(input => {
//         input.value = input.value.trim();
//         if (!input.value) {
//             isInVaLid = true;
//             showError(input, 'Không để trống');
//         } else {
//             showSuccess(input);
//         }
//     });
//     return isInVaLid;
// }
// // Check match pass
// function checkMatchPass(passwordInput, cfPasswordInput) {
//     if (passwordInput.value !== cfPasswordInput.value) {
//         showError(cfPasswordInput, 'Mật khẩu không khớp');
//         return true;
//     }
//     return false;
// }

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     let isInVaLid = checkInVaLid([username, email, password, rePassword]);
//     let isMatchPass = checkMatchPass(password, rePassword);
//     let isInForUser = loadInforUser([username, email, password]);
//     if (isInVaLid || isMatchPass) {

//     }
// })
