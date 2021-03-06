const { fetchJson } = require('../tools/fetcher')
const { twitter } = require('video-url-link')
const { promisify } = require('util')
const config = require('../config.json')
const twtGetInfo = promisify(twitter.getInfo)

/**
 * Get Instagram media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${url}`)
    fetchJson(`https://api.vhtear.com/instadl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Cocofun media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const cocodl = (url) => new Promise((resolve, reject) => {
    console.log(`Get cocofun download from ${url}`)
    fetchJson(`https://api.vhtear.com/cocodownload?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get TikTok video from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tik = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok media from ${url}`)
    fetchJson(`https://api.vhtear.com/tiktokdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Facebook video from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
const fb = (url) => new Promise((resolve, reject) => {
    console.log(`Get Facebook media from ${url}`)
    fetchJson(`https://api.vhtear.com/fbdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Facebook video from URL.
 * @param {string} query
 * @returns {Promise<object>} 
 */
const tiktokht = (query) => new Promise((resolve, reject) => {
    console.log(`Get tiktok hastag  from ${query}`)
    fetchJson(`https://api.vhtear.com/tiktokhastag?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube media from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
const ytdl = (url) => new Promise((resolve, reject) => {
    console.log(`Get YouTube media from ${url}`)
    fetchJson(`https://api.i-tech.id/dl/yt?key=${config.itech}&link=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
/**
 * Get YouTube media from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
const ytmp3 = (url) => new Promise((resolve, reject) => {
    console.log(`Get YouTube media from ${url}`)
    fetchJson(`https://videfikri.com/api/ytmp3/?url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube media from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
const ytmp4 = (url) => new Promise((resolve, reject) => {
    console.log(`Get YouTube media from ${url}`)
    fetchJson(`https://videfikri.com/api/ytmp4/?url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Facebook media from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
const fbdl = (url) => new Promise((resolve, reject) => {
    console.log(`Get facebook media from ${url}`)
    fetchJson(`https://api.i-tech.id/dl/fb?key=${config.itech}&link=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Twitter media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tweet = (url) => new Promise((resolve, reject) => {
    console.log(`Get Twitter media from ${url}`)
    twtGetInfo(url, {}, (error, info) => {
        if (error) {
            reject(error)
        } else {
            resolve(info)
        }
    })
})

/**
 * Get TikTok video with no WM.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tikNoWm = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok with no WM from ${url}`)
    fetchJson(`https://lolhuman.herokuapp.com/api/tiktok?apikey=${config.lol}&url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get modded APK from moddroid.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const modroid = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query}...`)
    fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${query}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get modded APK from happymod.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const happymod = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query}...`)
    fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${query}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Line sticker from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const line = (url) => new Promise((resolve, reject) => {
    console.log(`Get Line sticker from ${url}`)
    fetchJson(`http://enznoire.herokuapp.com/line?url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get xnxx downloader.
 */
/**const line = (url) => new Promise((resolve, reject) => {
    console.log(`Get Line sticker from ${url}`)
    fetchJson(`http://enznoire.herokuapp.com/line?url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})*/

module.exports = {
    fb,
    ytmp3,
    ytmp4,
    fbdl,
    ytdl,
    tik,
    insta,
    tweet,
    tikNoWm,
    modroid,
    cocodl,
    happymod,
    tiktokht,
    line
}
