const { task, src, dest, series } = require("gulp");
const through2 = require("through2");
const owoify = require("owoify-js").default;
const del = require("del");
const rename = require("gulp-rename");

const owoContents = (level) => {
	return through2.obj((file, _, cb) => {
		if (file.isBuffer()) {
			file.contents = Buffer.from(owoify(file.contents.toString(), level));
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

const levels = ["owo", "uwu", "uvu"];

levels.forEach(level => {
	task(`cleanup-${level}`, (cb) => {
		del.sync([`dest-${level}/`]);
		cb();
	});

	task(`build-${level}`, () => {
		return src("src/guides/**/*.md")
			.pipe(owoContents(level))
			.pipe(owoPath(level))
			.pipe(dest(`dest-${level}/guides`));
	});

	task(`copy-${level}`, () => {
		return src(["src/**", "!src/**/*.md"])
			.pipe(owoPath(level))
			.pipe(dest(`dest-${level}/`));
	});

	task(level, series(
		`cleanup-${level}`
		, `build-${level}`
		, `copy-${level}`
	))

	exports[task] = series(task);
});

exports.default = series(...levels);
