const apodImg = document.getElementById('apodImg')
const apodTitle = document.getElementById('apodTitle')
const apodDate = document.getElementById('apodDate')
const apodExplanation = document.getElementById('apodExplanation')
const readMore = document.getElementById('readMore')
const modal = document.getElementById('modal')
const close = document.getElementById('close')

const fetchData = async () => {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
            api_key: 'F79GquOjuaFgbRNlp2pKVSceDF7JoVzYLNxRTs4U',
        }
    })
    console.log(response)
    return response;
};

const showData = async () => {
    const response = await fetchData()
    apodImg.src = `${response.data.url}`
    apodTitle.innerText = `"${response.data.title}"`
    apodDate.innerText = `"${response.data.date}"`
    apodExplanation.innerText = `"${response.data.explanation.slice(0, response.data.explanation.length - 701).concat('...')}"`
    return response;
} 

showData()

readMore.addEventListener('click', async() => {
        const response = await showData()
        modal.style.display = 'block';
        const modalTitle = document.querySelector('.modal-title')
        const modalBody = document.querySelector('.modal-body')
        modalTitle.innerText = `${response.data.title}`
        modalBody.innerText = `${response.data.explanation}`
})

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

