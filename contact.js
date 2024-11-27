// Dynamically load branch details from XML
document.addEventListener("DOMContentLoaded", () => {
    const branchList = document.getElementById("branch-list");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "branches.xml", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(this.responseText, "text/xml");

            const branches = xmlDoc.getElementsByTagName("branch");
            let output = "";

            Array.from(branches).forEach(branch => {
                const address = branch.getElementsByTagName("address")[0].textContent;
                const contact = branch.getElementsByTagName("contact")[0].textContent;
                const hours = branch.getElementsByTagName("hours")[0].textContent;

                output += `
                    <div class="branch">
                        <p><strong>Address:</strong> ${address}</p>
                        <p><strong>Contact:</strong> ${contact}</p>
                        <p><strong>Opening Hours:</strong> ${hours}</p>
                    </div>
                `;
            });

            branchList.innerHTML = output;
        }
    };

    xhr.send();
});

// Dynamically set the current year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
