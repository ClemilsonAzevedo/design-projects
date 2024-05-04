import { useRouteError } from 'react-router-dom'

interface ErrorType {
	statusText?: string
	message?: string
}

export default function ErrorPage() {
	const rawError = useRouteError()
	const error: ErrorType =
		typeof rawError === 'object' && rawError !== null
			? (rawError as ErrorType)
			: {}

	console.error(error)

	return (
		<div
			id='error-page'
			className='flex w-full h-full items-center justify-center flex-col gap-5 font-bold'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error ? error.statusText || error.message : ''}</i>
			</p>
		</div>
	)
}
