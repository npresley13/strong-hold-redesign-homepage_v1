const products = [];
const searchBox = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch('src/js/data.json')
    .then(response => response.json())
    .then(data => products.push(...data));

//console.log(products);

// Matches input to sku field
function findMatches(wordToMatch, products) {
    return products.filter(product => {
        const regex = new RegExp(wordToMatch, 'gi');
        return product["Base SKU"].match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, products);
    const html = matchArray.map(product => {
        const regex = new RegExp(this.value, 'gi');
        const productName = product["Base SKU"].replace(regex, `<span class="h1">${this.value}</span>`);
        return `
            <li>
                <span class="name">${productName}</span>
            </li>
        `
    }).join('');
    suggestions.innerHTML = html;
}

function clearSearchSuggestions() {
    suggestions.innerHTML = "";
    searchBox.value = "";
}

searchBox.addEventListener('change', displayMatches);
searchBox.addEventListener('keyup', displayMatches);
searchBox.addEventListener('focusout', clearSearchSuggestions);