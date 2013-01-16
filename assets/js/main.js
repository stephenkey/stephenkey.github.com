$(function () {

    var languages = [
      { label: "PHP", url: 'http://www.google.com', data: 60, color: '#FF530D' },
      { label: "CSS", url: 'http://www.google.com', data: 60, color: '#FF3483' },
      { label: "Ruby", url: 'http://www.google.com', data: 40, color: '#3442BF'},
      { label: "JS", url: 'http://www.google.com', data: 40, color: '#333333' },
      { label: "MySQL", url: 'http://www.google.com', data: 20, color: '#AAA' },
      { label: "Python", url: 'http://www.google.com', data: 5, color: '#2CB075' }
    ];

    var frameworks = [
      { label: "Rails (Ruby)", data: 60, color: '#2CB075' },
      { label: "Codeigniter (PHP)", data: 60, color: '#333333' },
      { label: "Slim (PHP)", data: 30, color: '#FF530D' },
      { label: "Backbone.js (JS)", data: 25, color: '#AAA' },
      { label: "Lithium (PHP)", data: 25, color: '#FF3483' },
      { label: "Flask (Python)", data: 10, color: '#3442BF' }
    ];
                        
    $.plot($("#languages"), languages, {
      series: {
          pie: { 
              innerRadius: 0.85,
              show: true,
              labelFormatter: function(label, series){
                  return '<a href="'+series.url+'" target="_blank">'+label+'</a>';
              },
          }
      }
    });

    $("#languages").append('<div class="title">Languages</div>');
                  
    $.plot($("#frameworks"), frameworks, {
      series: {
          pie: { 
              innerRadius: 0.85,
              show: true
          }
      }
    });

    $("#frameworks").append('<div class="title">Frameworks</div>');

    if($.getUrlVar('u')) {
      var u = $.getUrlVar('u');
      u = u.replace("-", " "); 
      $('#u').html('Hello ' + u + ',');
    }

});

$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});