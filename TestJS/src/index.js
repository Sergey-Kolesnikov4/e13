/* const div = document.createElement('div');
div.classList.add('wrapper');
const body = document.querySelector('body');
body.appendChild(div);
const header = document.createElement('h1');
header.textContent = "DOM (Document Object Model)";
div.insertAdjacentElement('beforebegin', header);
const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;
div.innerHTML = ul;
const img = document.createElement('img');
img.src = 'https://i.ytimg.com/vi/m2ZIlZ0UJGg/maxresdefault.jpg';
img.width = 240;
img.classList.add('super');
img.alt = 'Super Man';
div.appendChild(img);
const elemHtml = `
<div class = 'pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>`
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHtml);
const pDiv = document.querySelector('.pDiv');
pDiv.lastElementChild.classList.add('text1');
pDiv.firstElementChild.remove();
const generateAutoCard = (brand,color,year) =>{
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
        <div class = 'autoCard'>
            <h2>${brand} ${year}</h2>
            <p>Автомобиль ${brand} - ${year} года. Возраст авто - ${curYear-year} лет.</p>
            <p>Цвет: ${color}</p>
            <button type = 'button' class = 'btn'>Удалить</button>
        </div>
    `;
}
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'red'},
    {brand: 'Lexus', year: 2016, color: 'silver'},
    {brand: 'Nissan', year: 2012, color: 'black'}
]
const carsHTML = carsList.map(car=> {
    return generateAutoCard(car.brand, car.color, car.year)
}).join('');
carsDiv.innerHTML = carsHTML;
div.insertAdjacentElement('beforebegin', carsDiv);
const buttons = document.querySelectorAll('.btn');
function handClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();

    
}
buttons.forEach(button => {
    button.addEventListener('click',handClick)
})


 

const presidents = [
    {first: 'George', last: 'Washington', born: 1732, died: 1799},
    {first: 'John', last: 'Adams', born: 1735, died: 1826},
    {first: 'Ronald', last: 'Reagan', born: 1911, died: 2004},
    {first: 'Gerald', last: 'Ford', born: 1913, died: 2006},
    {first: 'Richard', last: 'Nixon', born: 1913, died: 1994},
    {first: 'John F.', last: 'Kennedy', born: 1917, died: 1963},
    {first: 'Harry S.', last: 'Truman', born: 1884, died: 1972},
    {first: 'Grover', last: 'Cleveland', born: 1837, died: 1908},
    {first: 'Chester A.', last: 'Arthur', born: 1829, died: 1886},
    {first: 'Abraham', last: 'Lincoln', born: 1809, died: 1865},
    {first: 'Franklin', last: 'Pierce', born: 1804, died: 1869},
    {first: 'Lyndon B.', last: 'Johnson', born: 1908, died: 1973},
    {first: 'Dwight D.', last: 'Eisenhower', born: 1890, died: 1969}
];

const writters = ['Василий, Жуковский','Александр, Грибоедов','Александр, Пушкин','Владимир, Даль','Николай, Языков',
'Федор, Тютчев','Николай, Гоголь','Алексей, Кольцов','Александр, Герцен','Иван, Гончаров','Михаил, Лермонтов',
'Петр, Ершов','Алексей, Толстой','Даниил, Заточник','Александр, Радищев','Евгений, Баратынский','Петр, Вяземский',
'Александр, Бестужев-Марлинский','Михаил, Загоскин','Сергей, Аксаков','Владимир, Одоевский','Григорий, Данилевский',
'Алексей, Писемский','Дмитрий, Григорович','Яков, Полонский','Леонид, Андреев','Валерий, Брюсов','Саша, Черный','Юрий, Трифонов',
'Федор, Абрамов','Дмитрий, Кедрин','Василий, Шукшин'];


const born1700 = presidents.filter(president => {
    if (president.born < 1800 && president.born >=1700 ) {
        return true;
    }
})

const firstLast = presidents.map(president => `${president.first} ${president.last} !`);


const oldest = presidents.sort((a,b) => {
    if (a.born > b.born) {
        return 1;
    } else {
        return -1;
    }
})


const totalLived = presidents.reduce((total,president) =>total + (president.died - president.born),0)

console.log(totalLived);
*/

document.write('Hello, world!')