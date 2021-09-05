const url = "https://movies-softkage.herokuapp.com/movies";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState == 4 && this.status == 200){
        //0 = UNSET, no se ha llamado al metodo open.
        //1 = OPENED, se ha llamado al metodo open.
        //2 = HEADERS_RECEIVED, se está llamando al metodo send().
        //3 = LOADING, se está cargando, es decir, está recibiendo la respuesta.
        //4 = DONE, se ha completado la operación.
        const data = JSON.parse(this.response);
        console.log(this.response);
        const HTMLResponse = document.querySelector('#app');

        const tpl = data.map((movies) => `<li>${movies._id} ${movies.tittle} ${movies.rating}</li>`);
        HTMLResponse.innerHTML = `<ul style='background-color: cyan;'>${tpl}</ul>`;

        
        
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${url}`);
xhr.send();
