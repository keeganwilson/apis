const baseUrl = 'https://swapi.dev/api'

const residentsBtn = document.querySelector('button');

const getResidents = () => {
    axios.get(`${baseUrl}/planets/?search=alderaan`)
        .then(res => {
            console.log(res)
            for(let i = 0; i < res.data.results[0].residents.length; i++) {
                axios.get(`${res.data.results[0].residents[i]}`)
                    .then(res => {
                        let resident = document.createElement('h2')
                        resident.innerHTML = `${res.data.name}`
                        document.body.appendChild(resident)
                    })  .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
}
residentsBtn.addEventListener('click', getResidents)