$('.list').loadmore('/path/to/more.html');

$('.list').loadmore('more.html',{

  id : null,

  className : 'more',

  useExistingButton: false,

  text : 'More',

  loadingText : 'Loading',

  page : 0,

  rowsPerPage : false,

  maxPageCount : false,

  pageParam : 'page',

  pageStartParam : 'start',

  filterResult: '*',

  complete : false,

  useHistoryAPI : true,

  useOffset : false,

 

  // Will be parsed from any pageParam or pageStartParam query params on an existing button.

  baseOffset: 0,

 


  processUrl: false,

 

  // if one uses both processUrl and useExistingButton then one will likely have to have a custom method to extract the modfied baseOffset from the existing button.

  // Receives Location object, itemCount and options.

  interpretUrl: function (loc, itemCount, options) {

    var result;

 

    loc.search.substr(1).split('&').some(function (pair) {

      pair = pair.split('=');

      if (pair[0] === options.pageParam) {

        result = parseInt(pair[1]) + options.baseOffset;
        return true;
      } else if (pair[0] === options.pageStartParam) {
        result = parseInt(pair[1]) + options.baseOffset - itemCount;
        return true;
      }

    });

    return result;

  }

});

$(".list").on("loadmore:last", function() {
    // ...
  });