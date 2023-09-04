import qr from 'qr-image'
import fs from 'fs'

const webPageQR = qr.image('https://barbara-tess-webpage.netlify.app')
webPageQR.pipe(fs.createWriteStream('webpageqr.png'))