const mammoth = require('mammoth')
const pdf = require('html-pdf')

async function convertToPdf(docxFileBuffer) {
	return new Promise((resolve, reject) => {
		mammoth
			.convertToHtml({
				buffer: docxFileBuffer,
			})
			.then(function (result) {
				const html = result.value // The generated HTML
				pdf.create(html).toBuffer(function (err, res) {
					if (err) {
						reject(err)
						return
					}
					resolve(res)
				})
			})
	})
}

module.exports = convertToPdf
