class ui {


    // Populates HTML after performing API call
    showInfo = (info) => {

        // Months
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Days
        const ttl = info.transcript;
        const rep = ttl.replace(/[\{\}\[\]\\\/]/gi, '');

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
                <div class="flex red">
                <h1 class="err">404</h1>
                <h2>Page not found</h2>
                <p>The page you are looking for does not exist or another error occurred.</p>
                </div>
            </div>
        `
    }


    // Clears the alert shown on the page after certain amount of time
    clearAlert = () => {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }


    // Shows alert after every joke search
    showAlert = (msg) => {

    }


}