'use strict';

// Data from the JSON file

let $imageLink = $.get('../data/page-1.json');
console.table($imageLink);

// Constructor function for images from the JSON file

function Image (url, title, description, keyword, horns){
  this.url = url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

Image.allImages = [];

Image.prototype.render = function() {
//   let template = $('#photo-template').html();
  $('main').append('<section class="clone"></section>');
  let imageClone = $('section[class="clone"]');
  let imageHtml = $('#photo-template').html();
  imageClone.html(imageHtml);
  imageClone.find('h2').text(this.title);
  imageClone.find('img').attr('src', this.url);
  imageClone.find('p').text(this.description);
  imageClone.removeClass('clone');
  imageClone.attr('class', this.title);
};

