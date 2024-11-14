const URL = "https://api.pexels.com/v1/search?query="; // Punto numero 1 preparazione, qui staiamo generando la url di chiamata all'API 

const btnPrimary = document.querySelector(".btn.btn-primary"); // con queta CONST stiamo selezionanfo il bottone(HTML) LOAD IMEAGES 
const btnSecondary = document.querySelector(".btn.btn-secondary");// con queta CONST stiamo selezionanfo il bottone(HTML) LOAD SECONDARY IMEAGES

btnPrimary.onclick = () => handlePexelsAPI("cat"); // qui stiamo legando la funzione() onckick al bottone LOAD IMEAGES 
btnSecondary.onclick = () => handlePexelsAPI("nature");// qui stiamo legando la funzione() onckick al bottone SECONDARY LOAD IMEAGES

const cardRow = document.querySelector(".album .row");// qui creamo una CONST per richiamare sia ALBUM(HTML) che la ROW (ALL'INTERNO DEL CONTAINER (ALBUM))

console.log(btnPrimary, btnSecondary);

const handleImgClick = id => { //qui stiamo definendo la FUNZIONE (handleImgClick) con parametro ID(che si riferisce all' ID di ogni IMG)
  //   console.log(photo);
  window.location.assign("./details.html?pexelsId=" + id); // e l'IMG verrà visualizzata nella pagina DETAILS 
};

const handlePexelsAPI = query => {  // qui stiamo crendo la FUNZIONE () dove handlePexelsAPI che che conterrrà il metodo FETCH()
  fetch(URL + query, {              //metodo FETCH(), dove richiediamo al server l'URL +  QUERY(per prelevare la foto)(query in questo caso  richiesta obbligatoria del server), con GET sottoinsteso (quando non è specificato è di default)
    headers: {                      // dove daremo L'autorizzazione per abbinare all'onclick precedentemente abbinato(handlePexelsAPI)dove appariranno le IMG
      Authorization: "OCl0zDFIYleugZkSUfoa2azhKhwtwRGWneqlTBwSQh8Qo25KYeNkpu2x"  // Punto numero 2 preparazione
    }
  })
    .then(resp => {  // la PROMISE (THEN) attende i dati da ricevere dall'API
      if (resp.ok) { // che grazie all'IF se il dato della (RESP) sarà (200) cioè (OK)
        return resp.json();// prenderà questo dato e lo tradurrà in formato JSON 
      }
    })
    .then(pexelsObj => { // in questo secondo THEN attendiamo gli oggetti all'interno di PEXELS
      cardRow.innerHTML = "";

      pexelsObj.photos.forEach(photo => { //qui con il FOREACH peschiamo ad uno ad uno gli oggetti che poi saranno inseriti In una card nuova che andrà a sostituire la card precedentemente creata in PEXELS-STAR(HTML)
        console.log(photo.photographer);
        const col = document.createElement("div"); // qui iniziamo a creare la struttura della nuova CARD-DINAMICA

        col.className = "col-md-4";
        // qui sotto una volta creta la COL andremo ad agganciare i dati dinamici ciclati dal FOREACH che si abbineranno nei luighi prestabiliti grazie al simbolo (${}) ---- Non dimenticare di utilizzare i (``) per ricreare un ELEMENTO  in JS ----
        col.innerHTML = `
            <div class="card mb-4 shadow-sm">
              <img src=${photo.src.medium} class="bd-placeholder-img card-img-top" alt=${photo.alt} onclick="handleImgClick(${photo.id})"/> 
              <div class="card-body">
                <h5 class="card-title">
                <a href="./details.html?pexelsId=${photo.id}">${photo.photographer}</a>
                </h5>
                <p class="card-text">
                ${photo.alt}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">${photo.id}</small>
                </div>
              </div>
            </div>
          `;

        cardRow.appendChild(col); //  qui agganciamop la CARD-DINAMICA all'ALBUM (CONST CARDROW) precedentemente creato
      });
    });
};

const handleSubmit = e => { // questa const viene ricreata appositamente per evitare il ricaricamento inutile della pagina qundo viene cliccato un button (per evitare cio uitilizzare il parametro preventDefault())
  e.preventDefault();

  
};
