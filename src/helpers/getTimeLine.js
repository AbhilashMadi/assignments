function getTimeLine(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  // Calculate the time difference in milliseconds
  const diffMs = now.getTime() - date.getTime();

  // Convert the time difference to seconds, minutes, hours, and days
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffMs / (1000 * 60));
  const diffHrs = Math.round(diffMs / (1000 * 60 * 60));
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.round(diffMs / (1000 * 60 * 60 * 24 * 30));

  // Format the output string based on the time difference
  if (diffSec < 60) {
    return `${diffSec} seconds ago`;
  } else if (diffMin < 60) {
    return `${diffMin} minutes ago`;
  } else if (diffHrs < 24) {
    return `${diffHrs} hours ago`;
  } else if (diffDays < 30) {
    return diffDays < 10 ? `0${diffDays} days ago` : `${diffDays} days ago`;
  } else {
    return `${diffMonths} months ago`;
  }
}

export default getTimeLine;