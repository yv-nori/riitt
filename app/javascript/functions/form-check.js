import { _doc } from "./utility";

$(function () {
  const CheckItems = checkItems();
  document.addEventListener('keyup', (e) => {
    let Message = ''
    if (CheckItems.$email.value !== CheckItems.$email_confimation.value) {
      Message = 'メールアドレスが一致していません。'
    }
    if (CheckItems.$email.value == '') {
      Message = 'メールアドレスが入力されていません。'
    }
    if (CheckItems.$name.value == '') {
      Message = 'お名前が入力されていません。'
    }
    if (Message == '') {
      $(CheckItems.$submit).addClass('isActive')
      CheckItems.$err.textContent = '';
    } else {
      $(CheckItems.$submit).removeClass('isActive')
      CheckItems.$err.textContent = Message;
    }
  });
});

export const checkItems = () => {
  const Items = {
    $err: _doc.getElementById('JS_form-check_err'),
    $submit: _doc.getElementById('submit'),
    $name: _doc.getElementById('name'),
    $email: _doc.getElementById('email'),
    $email_confimation: _doc.getElementById('email_cofirmation'),
  }
  console.log(Items)
  return Items;
}
