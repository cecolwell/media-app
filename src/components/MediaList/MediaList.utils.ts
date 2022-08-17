export const convertRatingToPercentage = (rating?: number) => {
  if (rating) {
    return `${Math.ceil(rating * 10)}%`;
  } else {
    return "N/A";
  }
};

export const getRatingBadgeColor = (rating?: number) => {
  let badgeColor;
  switch (true) {
    case rating && rating > 8:
      badgeColor = "green";
      break;
    case rating && rating > 6:
      badgeColor = "yellow";
      break;
    case rating && rating <= 6:
      badgeColor = "red";
      break;
    default:
      badgeColor = "#01b4e4";
  }
  return badgeColor;
};

export const getReleaseYear = (releaseDate?: string) => {
  return releaseDate ? releaseDate?.split("-")[0] : "N/A";
};

export const getLastAirDateYear = (lastAirDate: string) => {
  return lastAirDate.split("-")[0];
};
