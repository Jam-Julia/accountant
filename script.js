
//скролл до секций по ссылкам

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.header__nav ').offsetHeight;
    //const topOffset = 0;  пока не нужен отступ сверху 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

//плавающая панель nav
let topOfSticky = document.querySelector('.header__info ').offsetHeight;

window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.body.scrollTop > topOfSticky || document.documentElement.scrollTop > topOfSticky) {
    document.getElementById("stick").classList.add('sticky');
  }
  else {
    document.getElementById("stick").classList.remove('sticky');
  }
}

//jquery send-to-tg
const Tg_group = "680265068"; //группа
const CHAT_ID = "-1001937922329"; //канал
const TOKEN = "6074503747:AAH6DV-t1QYP0B6XEthugPEncwfpu9iWfcA";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const formstat = document.getElementById('stat');
formstat.innerHTML = "Заказать звонок";
//обработчик

document.getElementById('tg').addEventListener('submit', function (e) {
  e.preventDefault(); // вызываю выполнение функции,прикрывая отправку по submit превентдефолтом

  let message = `<b>Нужен дистанционный бухгалтер</b>\n`;
  message += `<b>Отправитель: </b>${this.Username.value}\n`;
  message += `<b>Телефон: </b>${this.Userphone.value}`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
    .then((res) => {
      this.Username.value = "";
      this.Userphone.value = "";
      formstat.innerHTML = "Успешно отправлено!";
      formstat.style.color = "green";

    })
    .catch((err) => {
      console.warn(err);
      formstat.innerHTML = "Упс! Что-то пошло не так";
      formstat.style.color = "red";

    })
    .finally(() => {
      console.log("end of promiss");
    })
})

// divs
var cards = document.querySelectorAll('.flip-card__inner');

[...cards].forEach((card) => {
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
});





