// import { ParsedQuery } from "query-string";

/**
|--------------------------------------------------
| HELPER FUNCTIONS
|--------------------------------------------------
*/

/**
 * Turns an array of strings into a single string separated by a comma
 */
export function concatenateStrings(...args: string[]) {
  return args.join(",");
}

/**
 * Serialize
 * @param query ParsedUrlQuery object containing the query arguments in a key-value format
 */
export function serializeQuery(query: any): string {
  const serialized = Object.entries(query)
    .map((arr) => `${arr[0]}=${arr[1]}`)
    .join("&");

  return query && Object.entries(query).length > 0 ? `?${serialized}` : "";
}

/**
 * Calculate the difference between the current time and
 * a provided timestamp by return the result as string
 */
export function timeSince(timeStamp: Date): string {
  let timeSince = "";
  let day, month, year;
  const now = new Date(),
    secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
  if (secondsPast < 60) {
    timeSince = parseInt(secondsPast.toString()) + "s";
  }
  if (secondsPast < 3600) {
    timeSince = parseInt((secondsPast / 60).toString()) + "m";
  }
  if (secondsPast <= 86400) {
    timeSince = parseInt((secondsPast / 3600).toString()) + "h";
  }
  if (secondsPast > 86400 && timeStamp !== null) {
    day = timeStamp.getDate();
    const tsString = timeStamp
      .toDateString()
      .match(/ [a-zA-Z]*/) as RegExpMatchArray;
    month = tsString[0].replace(" ", "");
    year =
      timeStamp.getFullYear() == now.getFullYear()
        ? ""
        : " " + timeStamp.getFullYear();
    timeSince = day + " " + month + year;
  }
  return timeSince;
}
