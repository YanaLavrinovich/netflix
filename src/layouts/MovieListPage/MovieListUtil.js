export const sortByField = (movies, field) => {
    const sortedMovies = [...movies]
    sortedMovies.sort((a, b) => a[field] > b[field] ? 1 : -1);
    return sortedMovies
}

export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}