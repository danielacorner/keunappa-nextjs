const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// TODO

const url = 'https://www.coupang.com/np/products/brand-shop?brandName=%EB%9E%98%EC%8B%9C%ED%94%8C&channel=plp_C2';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const items = $('.search-product-wrap-list li');

    items.each((i, el) => {
      const item = $(el).find('.name').text().trim();
      const description = $(el).find('.description').text().trim();
      const image = $(el).find('.image img').attr('src');

      fs.writeFileSync(`${item}.md`, `# ${item}\n\n${description}\n\n![${item}](${image})`);
    });
  })
  .catch(console.error);