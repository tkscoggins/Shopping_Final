let html ='';

for ( let i =0; i < sale.length; i++) {
    let sale = sale[i];
    html += `
    <h2>${sale.name}</h2>
    <h2>${same.style} | ${sale.conditon}</h2>
    <img src="${sale.photo}" alt=''>
    `;
}

    document.querySelector('main').insertAdjacentHTML('beforeend',html);