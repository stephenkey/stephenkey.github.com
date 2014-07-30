$(function () {

    var languages = [
      { label: "Ruby", data: 25, color: '#3442BF'},
      { label: "CSS", data: 25, color: '#FF3483' },
      { label: "JS", data: 15, color: '#333333' },
      { label: "PHP", data: 15, color: '#FF530D' },
      { label: "MySQL", data: 15, color: '#AAA' },
      { label: "Python", data: 5, color: '#2CB075' }
    ];

    var frameworks = [
      { label: "Rails (Ruby)", data: 25, color: '#2CB075' },
      { label: "Jekyll (Ruby)", data: 20, color: '#2CB075' },
      { label: "Codeigniter (PHP)", data: 15, color: '#333333' },
      { label: "Slim (PHP)", data: 10, color: '#FF530D' },
      { label: "AngularJS (JS)", data: 10, color: '#AAA' },
      { label: "BackboneJS (JS)", data: 10, color: '#AAA' },
      { label: "Lithium (PHP)", data: 5, color: '#FF3483' },
      { label: "Flask (Python)", data: 5, color: '#3442BF' }
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