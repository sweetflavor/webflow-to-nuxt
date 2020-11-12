import argOptions from './options'
import { createDir, cdInToDir } from './utils'

export function cli(args) {
	const options = argOptions(args);
	const name = options.name
	const path = options.path
	createDir(name)
	cdInToDir(name)
	createDir('pages')
}
