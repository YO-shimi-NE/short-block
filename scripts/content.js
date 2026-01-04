const mutationCallback = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type !== "childList") continue;

    const targets = mutation.target.querySelectorAll(
      ".reel-video-in-sequence-new"
    );

    targets.forEach((target) => {
      if (target.id === "0") return;
      target.remove();
    });
  }
  const navigation = document.querySelector(
    ".navigation-container .style-scope .ytd-shorts"
  );

  if (!navigation) return;

  navigation.remove();
};

addEventListener("load", () => {
  const bodyContainer = document.body;
  if (!bodyContainer) {
    console.log("No body container found");
    return;
  }

  console.log(
    "DOMContentLoaded - Setting up MutationObserver for shorts container"
  );

  const observer = new MutationObserver(mutationCallback);

  observer.observe(bodyContainer, {
    childList: true,
    subtree: true,
    attributes: false,
  });
});
