/*
 * vim:ft=javascript:fenc=UTF-8:ts=2:sts=2:sw=2:expandtab:
 */

var Url = {

  /**
   * This function is used to open url in the current tab
   *
   * @param: url
   */
  open: function(url) {
    if(!url) {
      console.log("The url wasn't specified, cannot continue");
      return;
    }

    window.location.href = url;
  },

  /**
   * This function will return the url with the last digit incremented
   *  example:
   *    if url = http://www.example.com/page/2/
   *    the function will return http://www.example.com/page/3/
   *
   * @param: String url, The url to increment.
   * @param: Int count, how many int to increment the url
   * @return: String, The url incremented.
   */
  increment: function(url, count) {

    if(count == null)
      count = 1;

    return this.incrementDecrement('increment', url, count);
  },

  /**
   * This function will return the url with the last digit decremented
   *  example:
   *    if url = http://www.example.com/page/2/
   *    the function will return http://www.example.com/page/1/
   *
   * @param: String url, The url to decrement.
   * @param: Int count, how many int to decrement the url
   * @return: String, The url decremented.
   */
  decrement: function(url, count) {

    if(count == null)
      count = 1;

    return this.incrementDecrement('decrement', url, count);
  },

  /**
   * This function will return the url with the last digit either incremented or decremented
   *  example:
   *    if url = http://www.example.com/page/2/
   *    the function will return http://www.example.com/page/1/
   *
   * @param: String operation, valid values are: {increment, decrement}
   * @param: String url, The url to increment/decrement.
   * @param: Int count, how many int to increment/decrement the url
   * @return: String, The url incremented/decremented.
   */
  incrementDecrement: function(operation, url, count) {

    if(count == null)
      count = 1;

    var matches = url.match(/(.*?)(\d+)(\D*)$/);

    if(!matches) {
      console.log("No matches found in the url.");
      return false;
    }

    var pre = matches[1];
    var number = matches[2];
    var post = matches[3];
    var newNumber;

    switch(operation) {
    case 'increment' :
      newNumber = parseInt(number, 10) + count;
      break;
    case 'decrement' :
      newNumber = parseInt(number, 10) - count;
      break;
    }

    var newNumberStr = String(newNumber > 0 ? newNumber : 0);
    if (number.match(/^0/)) { // add 0009<C-a> should become 0010
      while (newNumberStr.length < number.length)
        newNumberStr = "0" + newNumberStr;
    }

    newUrl = pre + newNumberStr + post;
    return newUrl;
  }
};
