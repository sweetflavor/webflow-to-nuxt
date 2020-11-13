import argOptions from './options'
import createNuxtProject from './create-nuxt'

export function cli(args) {
	const options = argOptions(args);
	const name = options.name
	const path = options.path
	createNuxtProject(name, path)
}
