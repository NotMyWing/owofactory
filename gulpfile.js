const { src, dest, series } = require("gulp");
const through2 = require("through2");
const owoify = require("owoify-js").default;
const del = require("del");

const compileMd = () => {
	return through2.obj((file, _, cb) => {
		if (file.isBuffer()) {
			file.contents = Buffer.from(owoify(file.contents.toString()));
			cb(null, file);
		}
	})
}

function rmrf(cb) {
	del(["dest/**/*"]).then(() => {
		cb();
	});
}

function buildMd() {
	return src("src/guides/**/*.md")
		.pipe(compileMd())
		.pipe(dest("dest/guides/"));
}

function copy() {
	return src(["src/**", "!src/**/*.md"])
		.pipe(dest("dest/"));
}

exports.default = series(rmrf, buildMd, copy);
