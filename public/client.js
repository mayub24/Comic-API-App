// Fetch and api calls
// The owners of xkcd.com have disabled CORS requests on their server
class req {

    constructor() {
        this.bookNum = 1;
    }

    fetchAPI = async () => {

        try {
            const getAPI = await fetch(`https://xkcd.com/${this.bookNum}/info.0.json`);
            const resp = await getAPI.json();

            console.log(getAPI);
            console.log(this.bookNum);

            return {
                info: resp,
                bookNumber: this.bookNum
            }
        } catch (error) {
            console.log(error);

            return {
                err: error
            }
        }
    }

}

