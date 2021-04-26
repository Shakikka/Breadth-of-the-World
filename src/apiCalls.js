const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error('run for your life!');
    } else {
        return response.json()
    }

}

export const getAllHyruleInfo = () => {
    return fetch('https://botw-compendium.herokuapp.com/api/v2')
            .then(checkResponse)
}   
