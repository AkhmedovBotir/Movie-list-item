
const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
	return (
		<div className='bg-info p-5 rounded-5'>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
			<p className='fs-4 text-uppercase'>Sevimli film: {favouriteMovieCount}</p>
		</div>
	)
}

export default AppInfo
