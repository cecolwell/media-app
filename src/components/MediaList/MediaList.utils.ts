export const convertRatingToPercentage = (rating?: number) => {
  if (rating) {
    return `${Math.ceil(rating * 10)}%`;
  }
};

export const getRatingBadgeColor = (rating?: number) => {
  if (rating) {
    if (rating > 8) {
      return "green";
    } else if (rating > 6) {
      return "yellow";
    } else {
      return "red";
    }
  }
};

export const getReleaseYear = (releaseDate?: string) => {
  return releaseDate?.split("-")[0];
};
