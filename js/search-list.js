/*search through stock*/

//array for inventory 

const inStock=['boots','sandals', 'heels', 'bikes', 'skateboards', 'wheels', 'bearings', 'toasters',
        'mixers', 'pans', 'dishes', 'sheets', 'chairs'];
        const search = prompt ('Search for a product.');
        let message;

        if (inStock.includes (search)) {
            message=`<strong>Yes, we have ${search}<strong>.`;
        } else {
                message=`<strong>Sorry we do not have ${search}<strong>.`;
            }
        document.querySelector('section').innerHTML= `<p>${message}</p>`;    