class ui {



    // Populates HTML after performing API call
    showInfo = (info) => {

        let val = 0;

        // Months
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Days
        const ttl = info.transcript;
        const rep = ttl.replace(/[\{\}\>\<\[\]\\\/]/gi, '');

        document.querySelector('.info').innerHTML =
            `
        <div class="card text-center">
                <div class="card-flex flex" id=box-${info.num}>
                    <img src="${info.img}" alt="${info.alt}" >

                    <div class="joke">
                        <h1>${info.title}</h1>
                        <p>${rep}</p>
                        <p>Date Created: ${months[info.month]} ${info.day}, ${info.year}</p>
                    </div>
                </div>
            </div>
        `
    }



    // Shows error in the html if error occurs
    showError = () => {
        document.querySelector('.info').innerHTML =
            `
            <div class="card text-center">
                <div class="flex">
                <h1 class="err">404</h1>
                <h2>Page not found</h2>
                <p>The page you are looking for does not exist or another error occurred.</p>
                </div>
            </div>
        `

        this.showAlert('Joke not found', 'red');
    }


    // Clears the alert shown on the page after certain amount of time
    clearAlert = () => {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }


    // Shows alert after every joke search
    showAlert = (msg, className) => {

        // Remove any type of existing alert before adding this error.
        this.clearAlert();

        const div = document.createElement('div');
        div.className = `alert text-center ${className}`;
        div.textContent = `${msg}`;


        // Putting this alert above the info div
        const info = document.querySelector('.info');
        info.insertBefore(div, info.childNodes[0]);
    }


}