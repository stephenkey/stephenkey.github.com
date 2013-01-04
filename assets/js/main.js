$(function () {

    var u = $.getUrlVar('u');
    u = u.replace("-", " "); 
    $('#u').html('Hello ' + u + ',');

    var pie1 = [
      { label: "PHP", url: 'http://www.google.com', data: 60, color: '#FF530D' },
      { label: "CSS", url: 'http://www.google.com', data: 60, color: '#FF3483' },
      { label: "Ruby", url: 'http://www.google.com', data: 40, color: '#3442BF'},
      { label: "JS", url: 'http://www.google.com', data: 30, color: '#333333' },
      { label: "MySQL", url: 'http://www.google.com', data: 20, color: '#AAA' },
      { label: "Python", url: 'http://www.google.com', data: 5, color: '#2CB075' }
    ];
                        
    $.plot($("#pie1"), pie1,
    {
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

    $("#pie1").append('<div style="position:absolute; top:42%; left: 27%;">Languages</div>');

    var pie2 = [
      { label: "Rails (Ruby)", data: 60, color: '#FF530D' },
      { label: "Codeigniter (PHP)", data: 60, color: '#333333' },
      { label: "Slim (PHP)", data: 30, color: '#2CB075' },
      { label: "Lithium (PHP)", data: 25, color: '#FF3483' },
      { label: "Flask (Python)", data: 10, color: '#3442BF' }
    ];
                        
    $.plot($("#pie2"), pie2,
    {
      series: {
          pie: { 
              innerRadius: 0.85,
              show: true
          }
      }
    });

    $("#pie2").append('<div style="position:absolute; top:42%; left: 21%;">Frameworks</div>');

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