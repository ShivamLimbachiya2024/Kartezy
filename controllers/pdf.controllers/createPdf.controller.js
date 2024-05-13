// const pdfPuppeteer = require('pdf-puppeteer');
const puppeteer = require("puppeteer");
const Html = require("../../helpers/html.helper");
const logger = require("../../configs/pino.config");

const createPdf = async (request, response) => {
  try{
    const html = new Html();
    const content = html.createHtml(JSON.parse(request.body.pdf));
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(content, { waitUntil: 'domcontentloaded' });
    let filename = `./public/pdf/${new Date().getTime()}.pdf`;
    await page.pdf({
      path: filename,
      format: "A4",
    })
    await browser.close();

    response.status(200).send({flag: true, message: 'Downloded...', url: filename});
  }
  catch(error){
    logger.error(error);
    response.status(500).send({
      flag: false,
      message: 'PDF is not genrate'
    })
  }
}

module.exports = { createPdf };