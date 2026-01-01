const mutationCallback = (mutationList, observer) => {
    const reels = document.querySelectorAll('.reel-video-in-sequence-new');

    for (const reel of reels) {
        if (!reel) continue;

        if (reel.attributes && reel.attributes['id'].value === '0') continue;

        reel.remove();
    }

    document
        .querySelector('.navigation-container .style-scope .ytd-shorts')
        .remove();
}

addEventListener("load", () => {
    const shortContainer = document.getElementById('shorts-container');

    if (!shortContainer) {
        console.log('No shorts container found');
        return;
    }

    console.log('load');
    const observer = new MutationObserver(mutationCallback);
    observer.observe(document, { childList: true, subtree: true, attributes: false });
})
