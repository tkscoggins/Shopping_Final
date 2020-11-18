/*search through stock*/


const inStock=['boots','sandals', 'heels', 'bikes', 'skateboards', 'wheels', 'bearings', 'toasters',
        'mixers', 'pans', 'dishes', 'sheets', 'chairs'];
        const search = prompt ('Search for a product.');
        let message;

        if (inStock.includes (search)) {
            message=`Yes, we have <strong> ${search}<strong>.`;
        } else {
                message=`Sorry we do not have <strong>${search}<strong>.`;
            }
        document.querySelector('main').innerHTML= `<p>${message}</p>`;    