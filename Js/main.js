$(document).on('mobileinit', init);

function init()
{
  $(document).on('pageshow', '#homepage', homepage);
  $(document).on('pageshow', '.step' , Steps);
}
//https://api.jquerymobile.com/pageshow/
function homepage()
{
  if( 'localStorage' in window )
  {
    var saved = window.localStorage.getItem('tutorialPage');
	  if (saved!= null)    
	  {
      $('a[id="startLink"]').attr('href', saved);
    }///Set close button to start link
  }
}

function Steps()
{
  if( 'localStorage' in window )
  {
    var crrntPage = '#' + $(this).attr('id');
    window.localStorage.setItem('tutorialPage', crrntPage);
  }
  
  $('a[data-rel="back"]').attr
  ({
    'href': '#homepage',
    'data-rel': ''///Reset close button 
  });
}