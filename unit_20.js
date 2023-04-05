
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */

function t1(event) {
    console.log(event);
    document.querySelector('.out-1').innerHTML = event.key;
}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */

function t2(event) {
    console.log(event);
    document.querySelector('.out-2').innerHTML = event.keyCode;
}

document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */


function t3(event) {       
    let out = (47 < event.keyCode && event.keyCode < 58);    
    document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */

let str4 = '';
function t4(event) {    
    
    let symb = event.key;
    let symbToLowerCase = symb.toLowerCase();
    
    console.log('symb:', symb);   
    console.log('symb.toLowerCase():', symbToLowerCase);
    
    if (symb == symbToLowerCase) {
        str4+= symb;
        console.log(symb == symbToLowerCase);        
    } else {
        console.log(false);
    }
    console.log('out-4:', str4);
    console.log('_______________________');
    document.querySelector('.out-4').textContent = str4;
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
let str5 = '';
function t5(event) {
    // console.log(event);
    // let symb = event.key
    // let symbToUpperCase = symb.toUpperCase();

    // console.log('symb:', symb);
    // console.log('symb.symbToUpperCase():', symbToUpperCase);    

    // if (symb == 'Shift' || symb == 'CapsLock') {       
    //     console.log('str5-if:', str5);
    // } else if (symb != 'Shift' || symb != 'CapsLock') {
    //     str5+= symbToUpperCase;
    //     console.log('str5-if:', str5);
    // }    
    // document.querySelector('.out-5').innerHTML = str5;
    // console.log('str5:', str5);
    // console.log('===============================');

    if (event.key.length === 1) {
        str5+= event.key.toUpperCase();
    }
    
    document.querySelector('.out-5').innerHTML = str5; 
}

document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */
let str6 = '';
function t6() {
    if ((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 48 && event.keyCode <= 57))  {
        str6+= event.key;
        console.log('str6:', str6);
    }
    document.querySelector('.i-6').value = str6;
    return false;
}

document.querySelector('.i-6').onkeypress= t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = ['a', 'z', 'x', 'w', 'y', 't'];

function t7() {
    console.log('a7:', a7);
   let rndm = a7[Math.floor(Math.random()*a7.length)];
   console.log(rndm);

   document.querySelector('.out-7').textContent = rndm;
}

document.querySelector('.i-7').onkeydown= t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

const a8 = {
    i : 1,
    o : 0,
    l : 7
}
let out8 = '';
function t8(event) {
    // 1. Получаем из event введенный символ
    // 2. Проверяем наличие такого ключа в a8 - уже делали это раньше!!!!
    // 3. Если есть дописываем в out-8 символ из массива a8. Если нет - введенный символ.
    let symb = event.key;    
    console.log(symb);
    
    if (symb in a8) {
        out8+=a8[symb];
    } else {
        out8+=symb;
    }
    
    document.querySelector('.out-8').textContent = out8;
}

document.querySelector('.i-8').onkeydown= t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */
let i9 = 0
function t9(event) {
    console.log(event);    

    if (event.keyCode == +40) {
        i9++;
    }
    document.querySelector('.out-9').textContent = i9;
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;

function t10(event) {
    // увеличиваем  h, w, потом присваиваем как свойства...
    console.log(event); 

    if (event.keyCode == +40 || event.keyCode == +38) {
        h++;
    } else if (event.keyCode == +37 || event.keyCode == +39) {
        w++;
    }
    console.log('w:', w);
    console.log('h', h);

    document.querySelector('.block-10').style.width = (w + 'px');
    document.querySelector('.block-10').style.height = (h + 'px');
}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/

// 1. Создать до функции константу и получить в нее все кнопки клавиатуры по классу keyboard.

const keyb = document.getElementsByClassName('keyboard');
console.log('keyb:', keyb);

function t11(event) {
    console.log(event);
    console.log('event.key:', event.key);

    // 2. Внутри функции первое что мы делаем - проходим циклом по всем кнопкам и удаляем класс .active
    for (let i = 0; i < keyb.length; i++) {
        keyb[i].classList.remove("active");
    }

    // 3. Вводим переменную let key = event.key
    let key = event.key;
    console.log('event.key:', event.key);

    if (event.keyCode == +32) {
        key = 'space';
    } else if (event.keyCode == +17) {
        key = 'ctrl';
    } else if (event.keyCode == +13) {
        key = 'enter';
    } else if (event.keyCode == +18) {
        key = 'alt';
    }

    // 5. Ищем кнопку:
    let button = document.querySelector(`.keyboard[data="${key}"]`);
    console.log('button:', button);

    // 6. Теперь button через classList добавляем класс .active
    
    button.classList.add("active");


}

document.querySelector('.i-11').onkeydown = t11;