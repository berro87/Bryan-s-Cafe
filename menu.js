document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.xml")
        .then((response) => response.text())
        .then((data) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");

            // Load meals
            const meals = xmlDoc.getElementsByTagName("meal");
            let mealsHTML = "<h2>Meals</h2>";
            for (let meal of meals) {
                mealsHTML += `
                    <div>
                        <h3>${meal.getElementsByTagName("name")[0].textContent}</h3>
                        <p>${meal.getElementsByTagName("description")[0].textContent}</p>
                        <p>Price: ${meal.getElementsByTagName("price")[0].textContent}</p>
                    </div>
                `;
            }
            document.getElementById("meals").innerHTML = mealsHTML;

            // Load beverages
            const beverages = xmlDoc.getElementsByTagName("beverage");
            let beveragesHTML = "<h2>Beverages</h2>";
            for (let beverage of beverages) {
                beveragesHTML += `
                    <div>
                        <h3>${beverage.getElementsByTagName("name")[0].textContent}</h3>
                        <p>Price: ${beverage.getElementsByTagName("price")[0].textContent}</p>
                    </div>
                `;
            }
            document.getElementById("beverages").innerHTML = beveragesHTML;
        })
        .catch((error) => console.error("Error loading menu:", error));
});
