const { fetchJson } = require('../tools/fetcher')
const ph = require('@justalk/pornhub-api')
const config = require('../config.json')

/**
 * Get random lewd images from given subreddits.
 * @returns {Promise<object>}
 */
const randomLewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    console.log(`Searching lewd from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get armpits pict.
 * @returns {Promise<object>}
 */
const armpits = () => new Promise((resolve, reject) => {
    console.log('Searching for armpits...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get armpits pict.
 * @returns {Promise<object>}
 */
const bugil = () => new Promise((resolve, reject) => {
    console.log('Searching for foto bugil...')
    fetchJson('https://api-hendi.herokuapp.com/api/v1/randomp')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 * @returns {Promise<object>}
 */
const feets = () => new Promise((resolve, reject) => {
    console.log('Searching for feets...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 * @returns {Promise<object>}
 */
const thighs = () => new Promise((resolve, reject) => {
    console.log('Searching for thighs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 * @returns {Promise<object>}
 */
const ass = () => new Promise((resolve, reject) => {
    console.log('Searching for ass...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 * @returns {Promise<object>}
 */
const boobs = () => new Promise((resolve, reject) => {
    console.log('Searching for boobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 * @returns {Promise<object>}
 */
const belly = () => new Promise((resolve, reject) => {
    console.log('Searching for belly...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebellybutton')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 * @returns {Promise<object>}
 */
const sideboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for sideboobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 * @returns {Promise<object>}
 */
const ahegao = () => new Promise((resolve, reject) => {
    console.log('Searching for ahegao...')
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Pornhub metadata from URL.
 * @param {string} url 
 * @returns {Promise<object>}
 */
const phDl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Pornhub metadata from ${url}`)
    ph.page(url, ['title', 'download_urls', 'thumbnail_url'])
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Pornhub metadata from URL.
 /**
 * Get XXX video from URL.
const phDl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Pornhub video from ${url}`)
    fetchJson(` https://lolhuman.herokuapp.com/api/pornhub?apikey=${config.lol}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
*/

/**
 * Get XXX video from URL.
 * @param {string} url 
 * @returns {Promise<object>}
 */
const xxx = (url) => new Promise((resolve, reject) => {
    console.log(`Get XXX video from ${url}`)
    fetchJson(`https://api.vhtear.com/xxxdownload?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get XNXX Search.
 * @param {string} query 
 * @returns {Promise<object>}
 */
const xnxx = (query) => new Promise((resolve, reject) => {
    console.log(`Get Search XNXX ${query}`)
    fetchJson(`https://lolhuman.herokuapp.com/api/xnxxsearch?apikey=${config.lol}&query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get XNXX Downloader.
 * @param {string} url 
 * @returns {Promise<object>}
 */
const xndl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Search XNXX ${url}`)
    fetchJson(`https://lolhuman.herokuapp.com/api/xnxx?apikey=${config.lol}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Pronhub search.
 * @param {string} query 
 * @returns {Promise<object>}
 */
const phsearch = (query) => new Promise((resolve, reject) => {
    console.log(`Get Search Pornhub ${query}`)
    fetchJson(`https://lolhuman.herokuapp.com/api/pornhubsearch?apikey=${config.lol}&query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Hentai search.
 * @param {string} query 
 * @returns {Promise<object>}
 */
const nhsearch = (query) => new Promise((resolve, reject) => {
    console.log(`Get search hentai ${query}`)
    fetchJson(`https://lolhuman.herokuapp.com/api/nhentaisearch?apikey=${config.lol}&query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random cersex.
 * @returns {Promise<object>}
 */
const cersex = () => new Promise((resolve, reject) => {
    console.log('Get random cersex...')
    fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    randomLewd,
    armpits,
    feets,
    thighs,
    ass,
    boobs,
    belly,
    sideboobs,
    bugil,
    ahegao,
    phDl,
    nhsearch,
    xxx,
    xnxx,
    xndl,
    phsearch,
    cersex
}
