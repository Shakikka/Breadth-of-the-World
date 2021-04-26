// import { compendium } from 'hyrule-compendium'
// const hyruleInfo = new compendium
export const getAllHyruleInfo = () => {
    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then(checkResponse)
}

export const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error('run for your life!');
    } else {
        console.log(response)
        return response.json()
    }

}