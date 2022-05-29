function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('block_show');
    }
  });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.block_animation');

for (let element of elements) {
  observer.observe(element);
}