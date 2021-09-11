const footer = document.getElementById('footer');
const div = document.createElement('div');
footer.append(div);
const h1 = document.createElement('h1')
footer.append(h1)
h1.textContent= "소영";
h1.classList.add('style')
h1.classList.remove('style')
h1.remove()

