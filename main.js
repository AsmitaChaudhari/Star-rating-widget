class Stars {
    constructor(className, numOfRating) {

        this.className = className,
            this.isValid = false;
        this.numOfRating = numOfRating;
        this.rating = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
        this.starContainer = null;
        this.starContainer = document.querySelector(className);

        try {
            if (this.starContainer) {
                this.isValid = true;
                this.className = this.className
            } else {
                this.isValid = false;
                throw new Error(`className ${this.className} is not valid`)
            }
        } catch (e) {
            console.log(e.message)
        }
        if (this.isValid && numOfRating >= 0) {
            this.init();
        }
    }

    init() {
        const ul = document.createElement('ul');
        const fragment = document.createDocumentFragment();
        const rating = document.createElement('h3');

        ul.style.listStyleType = 'none';
        ul.style.display = 'flex';

        rating.style.marginLeft = '20px'

        const stars = this.rating.map((star) => {
            const li = document.createElement('li');
            const a = document.createElement('a');


            li.style.margin = '3px';
            a.style.fontSize = '2rem';
            a.style.cursor = 'pointer';
            a.innerHTML = '&#9734';
            a.id = star.id;

            if (a.id <= this.numOfRating) {
                a.innerHTML = '&#9733';
            }
            rating.innerHTML = `Rating: ${this.numOfRating}`;

            a.addEventListener('click', (e) => {
                this.setRating(ul, e, rating);
            })

            a.addEventListener('mouseenter', (e) => {
                this.setHoverEnter(ul, e);
            })

            a.addEventListener('mouseleave', (e) => {
                this.setHoverLeave(ul, e);
            })

            li.appendChild(a);
            fragment.appendChild(li);
            return li;
        });

        ul.appendChild(fragment);
        ul.appendChild(rating)
        this.starContainer.appendChild(ul);
    }

    setRating(ul, e, rating) {
        const liList = ul.querySelectorAll('li');
        const currentEl = Number(e.target.id);

        for (const li of liList) {
            const a = li.querySelector('a');

            if (a.id <= currentEl) {
                a.innerHTML = '&#9733'
                rating.innerHTML = `Rating: ${a.id}`;
            } else {
                a.innerHTML = '&#9734';
            }
        }
    }

    setHoverEnter(ul, e) {
        const liList = ul.querySelectorAll('li');
        const currentEl = Number(e.target.id);

        for (const li of liList) {
            const a = li.querySelector('a');
            if (a.id <= currentEl) {
                a.style.color = 'grey';
            }
        }
    }

    setHoverLeave(ul, e) {
        const liList = ul.querySelectorAll('li');
        const currentEl = Number(e.target.id);

        for (const li of liList) {
            const a = li.querySelector('a');
            if (a.id <= currentEl) {
                a.style.color = 'black';
            }
        }
    }
}

const star1 = new Stars(".stars-container", 3);
const star2 = new Stars(".stars-container", 0);