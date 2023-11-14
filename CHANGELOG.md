<a name="v1.6.1"></a>
# [Version 1.6.1 (v1.6.1)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.6.1) - 18 Sep 2023

## Internal changes

* Auto-generate [changelog](https://github.com/FloEdelmann/vue-ts-types/blob/main/CHANGELOG.md) based on GitHub releases, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/182
* Switch to markdownlint CLI v1, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/186
* Enable [`eslint-plugin-jest-formatting`](https://github.com/dangreenisrael/eslint-plugin-jest-formatting), by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/210
* Mention in readme that package has no dependencies, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/250
* Lock file maintenance, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/368
* Group typescript and typescript-eslint updates in dependabot, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/393 and https://github.com/FloEdelmann/vue-ts-types/pull/395
* Use [Prettier](https://prettier.io) for code formatting, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/405
* Lint YAML files, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/406
* Drop development support for Node 14 and default to Node 20 in tests, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/407
* Publish npm package with [provenance](https://github.blog/2023-04-19-introducing-npm-package-provenance/), by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/408
* Bump development dependencies


**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v1.6.0...v1.6.1

[Changes][v1.6.1]


<a name="v1.6.0"></a>
# [Version 1.6.0 (v1.6.0)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.6.0) - 28 Oct 2022

## Features

* Allow generic type for `numberProp`, by [@jhoermann](https://github.com/jhoermann) in https://github.com/FloEdelmann/vue-ts-types/pull/181

## Internal changes

* Use [`jest-extended`](https://github.com/jest-community/jest-extended) again, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/142
* Lint, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/165
* Add motivation section to docs, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/164
* Bump development dependencies

**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v1.5.1...v1.6.0

[Changes][v1.6.0]


<a name="v1.5.1"></a>
# [Version 1.5.1 (v1.5.1)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.5.1) - 09 Sep 2022

## Internal changes

* Drop development support for Node v12, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/137
* Bump development dependencies

**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v1.5.0...v1.5.1

[Changes][v1.5.1]


<a name="v1.5.0"></a>
# [Version 1.5.0 (v1.5.0)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.5.0) - 18 Aug 2022

## Features

* Add new user-facing custom validators, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/114

## Internal changes

* Bump development dependencies


**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v1.4.0...v1.5.0

[Changes][v1.5.0]


<a name="v1.4.0"></a>
# [Version 1.4.0 (v1.4.0)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.4.0) - 04 Aug 2022

## Features

* Add `.nullable` property, by [@jhoermann](https://github.com/jhoermann) in https://github.com/FloEdelmann/vue-ts-types/pull/89

## Internal changes

* Bump development dependencies

## New Contributors
* [@jhoermann](https://github.com/jhoermann) made their first contribution in https://github.com/FloEdelmann/vue-ts-types/pull/89

**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v1.3.0...v1.4.0

[Changes][v1.4.0]


<a name="v1.3.0"></a>
# [Version 1.3.0 (v1.3.0)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.3.0) - 13 Jul 2022

## Features / Bug fixes

* Ensure compatibility with multiple versions of Vue, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/83

## Internal changes

* Enable `strict` typescript-eslint config, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/29
* Inline `toHaveBeenCalledBefore` from `jest-extended` (because `jest-extended` is not compatible with Node v12 anymore), by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/84
* Bump development dependencies

**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v1.2.1...v1.3.0

[Changes][v1.3.0]


<a name="v1.2.1"></a>
# [Version 1.2.1 (v1.2.1)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.2.1) - 16 May 2022

## Bug fixes
* Make `PropOptions` interface public to fix TypeScript error, by [@ricayanzon](https://github.com/ricayanzon) in https://github.com/FloEdelmann/vue-ts-types/pull/25

## Internal changes
* Use `concurrency` in GitHub Actions workflows, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/20
* Bump development dependencies

## New Contributors
* [@ricayanzon](https://github.com/ricayanzon) made their first contribution in https://github.com/FloEdelmann/vue-ts-types/pull/25

**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v1.2.0...v1.2.1

[Changes][v1.2.1]


<a name="v1.2.0"></a>
# [Version 1.2.0 (v1.2.0)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.2.0) - 11 May 2022

## Features
* Allow generic type for `stringProp`, by [@FloEdelmann](https://github.com/FloEdelmann) in https://github.com/FloEdelmann/vue-ts-types/pull/19

## Internal changes
* Bump development dependencies

**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v1.1.0...v1.2.0

[Changes][v1.2.0]


<a name="v1.1.0"></a>
# [Version 1.1.0 (v1.1.0)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.1.0) - 29 Apr 2022

Emit CommonJS instead of ESM (https://github.com/FloEdelmann/vue-ts-types/pull/5)

**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v1.0.0...v1.1.0

[Changes][v1.1.0]


<a name="v1.0.0"></a>
# [Version 1.0.0 (v1.0.0)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v1.0.0) - 29 Apr 2022

Only minor changes to v0.2.2:

* Documentation:
  * Improve JSDoc comments
  * Improve README
  * Add contributing guidelines
  * Add license file
* Update development dependencies

**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v0.2.2...v1.0.0

[Changes][v1.0.0]


<a name="v0.2.2"></a>
# [Version 0.2.2 (v0.2.2)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v0.2.2) - 29 Apr 2022

This is the first automated release. The skipped versions since v0.1.0 were created during the auto-release setup.

**Full Changelog**: https://github.com/FloEdelmann/vue-ts-types/compare/v0.1.0...v0.2.2

[Changes][v0.2.2]


<a name="v0.1.0"></a>
# [Version 0.1.0 (v0.1.0)](https://github.com/FloEdelmann/vue-ts-types/releases/tag/v0.1.0) - 29 Apr 2022

Initial release

[Changes][v0.1.0]


[v1.6.1]: https://github.com/FloEdelmann/vue-ts-types/compare/v1.6.0...v1.6.1
[v1.6.0]: https://github.com/FloEdelmann/vue-ts-types/compare/v1.5.1...v1.6.0
[v1.5.1]: https://github.com/FloEdelmann/vue-ts-types/compare/v1.5.0...v1.5.1
[v1.5.0]: https://github.com/FloEdelmann/vue-ts-types/compare/v1.4.0...v1.5.0
[v1.4.0]: https://github.com/FloEdelmann/vue-ts-types/compare/v1.3.0...v1.4.0
[v1.3.0]: https://github.com/FloEdelmann/vue-ts-types/compare/v1.2.1...v1.3.0
[v1.2.1]: https://github.com/FloEdelmann/vue-ts-types/compare/v1.2.0...v1.2.1
[v1.2.0]: https://github.com/FloEdelmann/vue-ts-types/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/FloEdelmann/vue-ts-types/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/FloEdelmann/vue-ts-types/compare/v0.2.2...v1.0.0
[v0.2.2]: https://github.com/FloEdelmann/vue-ts-types/compare/v0.1.0...v0.2.2
[v0.1.0]: https://github.com/FloEdelmann/vue-ts-types/tree/v0.1.0

<!-- Generated by https://github.com/rhysd/changelog-from-release v3.7.1 -->
