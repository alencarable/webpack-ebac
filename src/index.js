import './styles.scss'
import img from './giphy.gif'

(() => {

    const rootStyle = () => {
        const elemRoot = document.getElementById('root')
        elemRoot.classList.add('container')
    }

    const titleComponent = () => {
        const elemH1 = document.createElement('h1')
        elemH1.innerHTML = 'Hello, world!'
        elemH1.classList.add('title')
        return elemH1
    }

    const imageComponent = () => {
        const elemImg = new Image(480,384)
        elemImg.src = img
        return elemImg
    }

    rootStyle()
    document.getElementById('root').appendChild(titleComponent());
    document.getElementById('root').appendChild(imageComponent());
})();
