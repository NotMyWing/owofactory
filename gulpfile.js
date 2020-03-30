const { src, dest, series } = require("gulp");
const through2 = require("through2");
const owoify = require("owoify-js").default;
const del = require("del");
const rename = require("gulp-rename");

const owoContents = () => {
	return through2.obj((file, _, cb) => {
		if (file.isBuffer()) {
			file.contents = Buffer.from(owoify(file.contents.toString()));
			cb(null, file);
		}
	})
}

const owoPath = () => {
	return rename((path) => {
		path.dirname = owoify(path.dirname);
		path.basename = owoify(path.basename);
		return path;
	});
}

function rmrf(cb) {
	del(["dest/**/*"]).then(() => {
		cb();
	});
}

function buildMd() {
	return src("src/guides/**/*.md")
		.pipe(owoContents())
		.pipe(owoPath())
		.pipe(dest("dest/guides/"));
}

function copy() {
	return src(["src/**", "!src/**/*.md"])
		.pipe(owoPath())
		.pipe(dest("dest/"));
}

exports.default = series(rmrf, buildMd, copy);
