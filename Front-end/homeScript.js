document.addEventListener("DOMContentLoaded", () => {
    const keywords = document.querySelectorAll(".keyword");
    const proceedBtn = document.getElementById("proceed-btn");
    const errorMessage = document.getElementById("error-message");

    let selectedKeywords = [];

    keywords.forEach(keyword => {
        keyword.addEventListener("click", () => {
            if (keyword.classList.contains("selected")) {
                // Remove from selection
                keyword.classList.remove("selected");
                selectedKeywords = selectedKeywords.filter(k => k !== keyword.textContent);
            } else {
                // Add to selection (limit 7)
                if (selectedKeywords.length < 7) {
                    keyword.classList.add("selected");
                    selectedKeywords.push(keyword.textContent);
                }
            }

            validateSelection();
        });
    });

    function validateSelection() {
        if (selectedKeywords.length < 3) {
            errorMessage.textContent = "Please select at least 3 interests.";
            proceedBtn.classList.remove("active");
            proceedBtn.disabled = true;
        } else if (selectedKeywords.length >= 7) {
            errorMessage.textContent = "You can select up to 6 interests.";
            proceedBtn.classList.remove("active");
            proceedBtn.disabled = true;
        } else {
            errorMessage.textContent = "";
            proceedBtn.classList.add("active");
            proceedBtn.disabled = false;
        }
    }

    // proceedBtn.addEventListener("click", () => {
    //     alert("Selected Keywords: " + selectedKeywords.join(", "));
    //     // This will send the keywords to the backend later
    // });

    
    proceedBtn.addEventListener("click", () => {
        if (selectedKeywords.length >= 3) {
           const query = selectedKeywords.map(k => encodeURIComponent(k)).join(",");
            window.location.href = `recomandation.html?keywords=${query}`;
        }
    });
});



