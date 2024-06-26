import { ReactNode } from 'react'

export type ProjectDataType = {
	name: string
	techs: {
		name: string
		icon: ReactNode
	}[]
	image: string
	link: string
	description: string
}
