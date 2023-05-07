const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

const websiteUrl = 'https://www.coupang.com/vp/products/6714237847?itemId=15597302157&vendorItemId=80998629263';

rp(websiteUrl, {
  headers: {
    'User-Agent': 'Request-Promise'
  }

})
  .then(html => {
    console.log("⭐🎈  file: scrape-coupang.js:9  html:", html)
    const $ = cheerio.load(html);
    const itemName = $('div.prod-buy-header > h2 > font > font').text().trim();
    const itemImage = $('.prod-image__detail').attr('src');
    const itemDescription = $('p.description').text().trim();
    const itemImages = [];
    $(`.productDetail .subType-IMAGE img`).each(function () {
      itemImages.push($(this).attr('src'));
    });
    const fileName = itemName.replace(/ /g, '-') + '.md';
    const content = `# ${itemName}\n\n` +
      `![${itemName}](${itemImage})\n\n` +
      `${itemDescription}\n\n` +
      `## Images\n\n` +
      itemImages.map(img => `![${itemName}](${img})\n\n`).join('') +
      `## Reviews\n\n` +
      itemReviews.map(review => `### ${review.author}\n\n` +
        `Rating: ${review.rating}\n\n` +
        `${review.body}\n\n`).join('');

    fs.writeFile(fileName, content, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Data has been written to ${fileName} successfully!`);
      }
    });
  })
  .catch(err => console.error(err));
