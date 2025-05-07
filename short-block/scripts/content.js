const removeShorts = () => {
    document.querySelectorAll("a[href^='/shorts/']").forEach(e => {
        const content = e.closest('#items');
        if (!content || !content.remove) return;
        content.remove();
    });
    const shortPage = document.getElementById("shorts-container")
    if (!shortPage || !shortPage.remove) return;
    shortPage.remove();
}

addEventListener("scroll", removeShorts)
addEventListener("loadstart", removeShorts)
addEventListener("load", () => {
    removeShorts()
})