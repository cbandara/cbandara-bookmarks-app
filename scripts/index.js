'use strict';
/* global $, bookmarkList, store, api */

$(document).ready(function() {
  bookmarkList.bindEventListeners();
  api.getBookmarks((bookmarks) => {
    bookmarks.forEach((bookmark) => bookmark.expanded = false);
    bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
    bookmarkList.render();
  });
});