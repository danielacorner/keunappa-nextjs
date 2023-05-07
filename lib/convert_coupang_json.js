const fs = require('fs');

function convertJsonToMd(inputFile) {
  fs.readFile(inputFile, (err, data) => {
    if (err) throw err;

    const items = JSON.parse(data);

    items.forEach(item => {
      const { Description, Price, Time, Stars, Reviews, Image_URL } = item;
      const filename = `${Description.trim()}.md`;
      const contents = `---\n` +
        `title: ${Description}\n` +
        `price: ${Price}\n` +
        `stars: ${Stars}\n` +
        `reviews: ${Reviews}\n` +
        `image_url: ${Image_URL}\n` +
        `---`;

      fs.writeFile(filename, contents, err => {
        if (err) throw err;
        console.log(`File ${filename} saved successfully!`);
      });
    });
  });
}

// Replace "data.json" with the name of your input JSON file
convertJsonToMd('coupang.json');
