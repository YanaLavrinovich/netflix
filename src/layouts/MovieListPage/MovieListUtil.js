export const sortByField = (movies, field) => {
    const sortedMovies = [...movies]
    sortedMovies.sort((a, b) => a[field] > b[field] ? 1 : -1);
    return sortedMovies
}