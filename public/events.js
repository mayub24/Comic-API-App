const http = new req;

const interface = new ui;

// Funciton for exceeding max number of jokes
exceedVal = () => {
    if (http.bookNum > 614) {
        interface.showError();
    }
    else {
        http.fetchAPI()
            .then((data) => {
                interface.showInfo(data.info);
            });
    }
}

// Append Joke Number
jokeNumberUpdate = () => {
    document.querySelector('.numb').innerHTML = `${http.bookNum}`;
}


// Initial function that calls the API and populates UI
const runFunc = () => {
    http.fetchAPI()
        .then((data) => {
            if (data.err) {
                interface.showError();
            }
            else {
                // data.bookNumber++;
                console.log(data.bookNumber);
                console.log(data.info);
                interface.showInfo(data.info);
                exceedVal();
                jokeNumberUpdate();
            }

        });
}

runFunc();


// Removes pagination buttons based on joke #
removeButtons = () => {
    const btnOne = document.querySelector('.btn-one');
    const btnTwo = document.querySelector('.btn-two');

    if (http.bookNum == 1) {
        btnOne.style.display = 'none';
    }
    else {
        btnOne.style.display = 'block';
    }

    if (http.bookNum == 614) {
        btnTwo.style.display = 'none';
    }
    else {
        btnTwo.style.display = 'block';
    }

    const card = document.querySelector('.card-flex');
    let id = card.id;
    console.log(id);
    // window.history.pushState(`${id}`, 'id', `/selected=${http.bookNum}`);
}

// Increment function after next button is clicked
increment = () => {
    document.querySelector('.btn-two').addEventListener('click', (e) => {
        http.bookNum = http.bookNum + 1;
        removeButtons();
        jokeNumberUpdate();
        http.fetchAPI()
            .then((data) => {
                interface.showInfo(data.info);
                exceedVal();
            });
    })
}

// Decrement after previous button is clicked
decrement = () => {
    document.querySelector('.btn-one').addEventListener('click', (e) => {
        http.bookNum = http.bookNum - 1;
        removeButtons();
        jokeNumberUpdate();
        http.fetchAPI()
            .then((data) => {
                interface.showInfo(data.info);
            });
    })
}

// Random Number Generator
rnd = () => {
    document.querySelector('.rnd').addEventListener('click', (e) => {
        let randomNum = Math.floor((Math.random() * 614) + 1);
        console.log(randomNum);
        http.bookNum = randomNum;
        jokeNumberUpdate();
        removeButtons();
        http.fetchAPI()
            .then((data) => {
                interface.showInfo(data.info);
            });
    })
}

// BONUS
// Search bar
searchBar = () => {
    document.querySelector('#searchJoke').addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            http.bookNum = parseInt(e.target.value);
            e.target.value = "";
            jokeNumberUpdate();
            removeButtons();
            http.fetchAPI()
                .then((data) => {
                    interface.showInfo(data.info);
                    exceedVal();
                });
        }
    })
}


increment();
decrement();
rnd();
searchBar();




