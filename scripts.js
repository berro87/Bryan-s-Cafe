document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('menuContent')) {
        fetch('menu.xml')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'text/xml');
                const meals = xmlDoc.getElementsByTagName('meal');
                let content = '<div class="menu-list">';
                for (let meal of meals) {
                    const name = meal.getElementsByTagName('name')[0].textContent;
                    const price = meal.getElementsByTagName('price')[0].textContent;
                    const description = meal.getElementsByTagName('description')[0].textContent;
                    content += `<div class="menu-item">
                        <h3>${name}</h3>
                        <p>Price: ${price}</p>
                        <p>${description}</p>
                    </div>`;
                }
                content += '</div>';
                document.getElementById('menuContent').innerHTML = content;
            });
    }

    if (document.getElementById('contactContent')) {
        fetch('branches.xml')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'text/xml');
                const branches = xmlDoc.getElementsByTagName('branch');
                let content = '<div class="branch-list">';
                for (let branch of branches) {
                    const address = branch.getElementsByTagName('address')[0].textContent;
                    const contact = branch.getElementsByTagName('contact')[0].textContent;
                    const hours = branch.getElementsByTagName('hours')[0].textContent;
                    content += `<div class="branch">
                        <p><strong>Address:</strong> ${address}</p>
                        <p><strong>Contact:</strong> ${contact}</p>
                        <p><strong>Opening Hours:</strong> ${hours}</p>
                    </div>`;
                }
                content += '</div>';
                document.getElementById('contactContent').innerHTML = content;
            });
    }
});
