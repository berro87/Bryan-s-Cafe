document.addEventListener("DOMContentLoaded", () => {
    fetch("branches.xml")
        .then((response) => response.text())
        .then((data) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");

            // Load branches
            const branches = xmlDoc.getElementsByTagName("branch");
            let branchesHTML = "<h2>Branches</h2>";
            for (let branch of branches) {
                branchesHTML += `
                    <div>
                        <p>Address: ${branch.getElementsByTagName("address")[0].textContent}</p>
                        <p>Contact: ${branch.getElementsByTagName("contact")[0].textContent}</p>
                        <p>Hours: ${branch.getElementsByTagName("hours")[0].textContent}</p>
                    </div>
                `;
            }
            document.getElementById("branches").innerHTML = branchesHTML;
        })
        .catch((error) => console.error("Error loading branches:", error));
});
